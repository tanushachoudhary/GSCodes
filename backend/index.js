import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import Connection from "./Database/db.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(bodyParser.json());

//**************************************************************/
//api integration for judge0
const JUDGE0_API_URL = "https://judge029.p.rapidapi.com/submissions";
const API_HOST = "judge029.p.rapidapi.com";
// Language mapping for Judge0
const languageMapping = {
  cpp: 54, // C++ (GCC 9.2.0)
  java: 62, // Java (OpenJDK 11)
};  

// Define the options object for Judge0 API requests
const options = {
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

// The endpoint that will handle code submissions
app.post("/judge", async (req, res) => {
  const { code, stdin, language } = req.body;

  const languageId = languageMapping[language];
  if (!languageId) {
    return res.status(400).json({ message: "Unsupported language" });
  }

  const payload = {
    source_code: code,
    language_id: languageId,
    stdin: stdin,
    base64_encoded: false,
  };

  try {
    const response = await axios.post(JUDGE0_API_URL, payload, options);
    const { token } = response.data;

    let retries = 0;
    const maxRetries = 3; // Limit the number of retries
    const maxDelay = 60000; // Maximum backoff time (1 minute)
    let delay = 2000; // Initial delay (2 seconds)

    let resultResponse = null;
    let statusCode = 2; // 2 means "Processing"

    while (statusCode === 2 || statusCode === 1) {
      if (retries >= maxRetries) {
        return res
          .status(500)
          .json({ message: "Max retries reached, request failed" });
      }

      await new Promise((resolve) => setTimeout(resolve, delay));

      resultResponse = await axios.get(`${JUDGE0_API_URL}/${token}`, options);
      statusCode = resultResponse.data.status.id;

      // Exponential backoff: Double the delay after each retry
      delay = Math.min(delay * 2, maxDelay); // Avoid delay exceeding maxDelay
      retries++;
    }

    // Handle the result after polling
    if (resultResponse.data.status.description === "Accepted") {
      res.json({
        message: "Code executed successfully",
        stdout: resultResponse?.data?.stdout,
      });
    } else {
      const compileError = resultResponse.data.compile_output
        ? Buffer.from(resultResponse.data.compile_output, "base64").toString(
            "utf-8"
          )
        : "No compile output available";
      res.json({
        message: `Compilation Error: ${resultResponse.data.status.description}`,
        stdout: compileError,
      });
    }
  } catch (error) {
    console.error(
      "Error executing code:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ message: "Error executing code", error: error.message });
  }
});

//**************************************************************/

//---------------------------------------------
/* Default error handling middleware */
app.use((err, req, res, next)=>{
  let {status = 500, message = "Some error has Occurred(reading at default error handler)"} = err;
  res.status(status).send(message);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

Connection();
