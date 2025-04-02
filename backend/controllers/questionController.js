//post problem for admin
//get problem details to render for everyone
//update problem for admin
//delete problem for admin
import QuestionModel from "../Models/questions.js";

const addNewProblem = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body); //

    let {
      questionDesc,
      questionTitle,
      questionDifficulty,
      tags,
      testCases,
      createdBy,
    } = req.body;

    if ( !questionTitle || !questionDesc) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const newQuestion = new QuestionModel({
      questionDesc,
      questionTitle,
      questionDifficulty,
      tags,
      testCases,
      createdBy,
    });
    newQuestion.createdBy = req.body.createdBy || "67bf6ac1f46c63342f2a862a";

    let savedQuestion = await newQuestion.save();
    console.log("Saved question:", savedQuestion);

    return res
      .status(201)
      .json({ data: savedQuestion, msg: "New question has been added" });
  } catch (err) {
    console.error("Error while adding question:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getProblems = async (req, res) => {
  try {
    let problems = await QuestionModel.find();
    return res.status(200).json({ data: problems });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export default { addNewProblem, getProblems };
