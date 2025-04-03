import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";
import { API } from "../service/api";
import axios from "axios";
import { DataContext } from "../context/DataProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const STARTER_CODE = {
  cpp: '#include <iostream>\nusing namespace std;\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}',
  java: 'import java.io,*;\n\tpublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}',
};

const ProblemExecPage = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState({});
  const [code, setCode] = useState("");
  const [stdin, setStdin] = useState("");
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("cpp"); // Default language is C++
  const [result, setResult] = useState("");
  const [stdout, setStdout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const {account} = useContext(DataContext);
  const navigate = useNavigate();


  const fetchProblem = async () => {
    console.log("fetchProblem() started execution");
    try {
      console.log("Fetching problem with ID:", id);
      const response = await API.getThisProblem({ id });
      if (!response) {
        console.log("response not coming");
      }
  
      console.log("Raw Response:", response.data);
      setProblem(response.data);
  
      // Set stdin with the first test case input if available
      if (response.data?.testCases?.length > 0) {
        setStdin(response.data.testCases[0].ipData);
      }
    } catch (error) {
      console.log("Error fetching problem: ", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(()=>{
    console.log(`Fetching data for ${id}`);  
    fetchProblem();
  },[id]);


  useEffect(() => {
    setCode(STARTER_CODE[language.toLowerCase()] || "");  
  }, [language]);

  const handleCompile = async () => {
    setIsLoading2(true); // Set loading state to true while running
    try {
      const response = await fetch("http://localhost:8000/judge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, stdin: stdin.trim(), language }),
      });

      const data = await response.json();

      let output = data.stdout || "";
      try {
        // Try to decode as Base64 first
        output = atob(output);
      } catch (e) {
        // If not Base64, keep original output
      }

      // Just show the output for the first test case (for simplicity)
      setStdout(data.stdout || "No output");
    } catch (error) {
      // Display error message if code execution fails
      setResult("Error executing code");
      setStdout(""); // Clear previous output
    } finally {
      setIsLoading2(false); // Set loading state back to false after execution
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setResult(""); // Clear previous result
    const testCaseResults = [];

    try {
      // Loop through each test case
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCase = problem.testCases[i];

        console.log(`Submitting Test Case ${i + 1}:`, testCase.input);

        const response = await fetch("http://localhost:8000/judge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code,
            stdin: testCase.ipData.trim(),
            language,
          }),
        });

        const data = await response.json();
        const expectedOutput = testCase.opData.trim();
        // const actualOutput = data?.stdout?.trim();

        const isBase64 = (str) => {
          try {
            return btoa(atob(str)) === str; // Decode & re-encode to check validity
          } catch (err) {
            return false;
          }
        };
        
        let actualOutput = data?.stdout?.trim() || "";
        
        if (isBase64(actualOutput)) {
          actualOutput = atob(actualOutput).trim();
        }
        
        // try {
        //   actualOutput = atob(actualOutput).trim();
        // } catch (e) {
        //   console.log(e);
        // }

        // Compare actual output with expected output and push result to the array
        if (actualOutput === expectedOutput) {
          testCaseResults.push(`Test Case ${i + 1}: ✅ Correct Answer`);
        } else {
          testCaseResults.push(`Test Case ${i + 1}: ❌ Wrong Answer`);
        }
      }

      setResult(testCaseResults.join("\n"));
      setStdout(""); // Clear stdout after processing all test cases
    } catch (error) {
      setResult(" Error executing code");
      setStdout(error.message || "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [code, language]);

  //function to delete a problem
  const deleteProblem = () =>{
    try{
      const response = API.deleteProblem({id});
      if(response){
        console.log("Problem has been deleted successfully!", response);
        navigate("/problems");
      }else{
        console.log("Some error with the response of api");
      }
    }catch(err){
      console.log("Some error occurred, api isn't being called", err);
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-500";
      case "Hard":
        return "text-red-400";
      default:
        return "text-gray-500";
    }
  };


  return (
    <>
    <div className="pb-20">
    <Header/>
    </div>
    <div className="bg-gray-950 h-screen flex flex-col">
      <div className="flex flex-1 h-full gap-8 p-7">

        {/* Left Section: Problem Details */}
        <div className="w-1/2 bg-gray-400 p-6 rounded-xl shadow-md flex flex-col h-full overflow-y-auto">
          <h1 className="text-4xl font-bold mb-4 p-2 text-gray-900">
            {problem?.questionTitle}
          </h1>
          {account._id === problem?.createdBy?._id 
          ?
          <div className="flex gap-3">
            <Link to={`/edit-problem/${problem?._id}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 active:scale-95 shadow-md hover:shadow-lg">
                Update
              </button>
            </Link>
            
            <button onClick={deleteProblem} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800 active:scale-95 shadow-md hover:shadow-lg">
              Delete
            </button>
          </div>
          :
          <></>
          }
          <div className="bg-gray-300 rounded-2xl my-5 p-4">
            <p className="text-black text-lg p-2">
              {problem?.questionDesc}
            </p>
            <p className="mt-3 text-lg p-2">
              Difficulty:{" "}
              <span
                className={`font-semibold text-lg p-2 ${getDifficultyColor(
                  problem?.questionDifficulty
                )}`}
              >
                {problem?.questionDifficulty}
              </span>
            </p>
            <p className="mt-4 text-lg p-2">
              Created by: {problem?.createdBy?.StudentName}
            </p>
            <div className="mt-4 text-lg p-2">
              <strong>Tags:</strong> {problem?.tags?.join(", ")}
            </div>
          </div>

          {/* Input / Output Section */}
          <div className="rounded-2xl my-5 flex gap-8">
            <div className="bg-gray-300 rounded-2xl p-5 w-1/2">
              <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">
                Input:
              </h3>
              {problem?.testCases?.map((testCase) => (
                <p key={testCase._id} className="text-black">
                  {testCase.ipData}
                </p>
              ))}
            </div>

            <div className="bg-gray-300 rounded-2xl p-5 w-1/2">
              <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">
                Output:
              </h3>
              {problem?.testCases?.map((testCase) => (
                <p key={testCase._id} className="text-black">
                  {testCase.opData}
                </p>
              ))}
            </div>
          </div>

          {/* Additional Sections */}
          <div className="bg-gray-300 rounded-2xl my-3 p-4">
            <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">
              Similar Problems:
            </h3>
          </div>
        </div>

        {/* Right Section: Code Editor */}
        <div className="w-1/2 bg-gray-400 p-7 rounded-xl shadow-md flex flex-col h-full overflow-y-auto">
          <div className="mb-4">
            <label htmlFor="language" className="mr-2 text-lg font-semibold">
              Choose Language:
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 border border-gray-600 rounded bg-gray-600 text-white"
            >
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          {/* Code Editor */}
          <MonacoEditor
            width="100%"
            height="350"
            language={language === "cpp" ? "cpp" : "java"}
            theme="vs-dark"
            value={code}
            options={{
              fontSize: 16,
              minimap: { enabled: false }, // Hide minimap
              wordWrap: "on", // Wrap long lines
              scrollBeyondLastLine: false, // Prevent scrolling past last line
              automaticLayout: true, // Adjusts size dynamically
              formatOnPaste: true, // Auto-format on paste
              formatOnType: true, // Auto-format while typing
              autoClosingBrackets: "always",
              quickSuggestions: true, // Enable autocomplete suggestions
              bracketPairColorization: { enabled: true }, // Highlight bracket pairs
            }}
            onChange={(newValue) => setCode(newValue)}
          />

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Input for your Program (stdin):
            </h3>
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-500 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-end gap-4 mt-3 flex-wrap">
            <button
              onClick={handleCompile}
              disabled={isLoading2}
              className="px-4 mt-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer mb-2 sm:mb-0"
            >
              {isLoading2 ? "Compiling..." : "Run Code"}
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Result:</h3>
            <p className="mb-2">{result}</p>
            {stdout && (
              <div className="bg-gray-800 p-4 rounded text-white">
                <h4 className="font-semibold">Output:</h4>
                <pre>{stdout}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default ProblemExecPage;