import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";
import axios from "axios";

const STARTER_CODE = {
  cpp: '#include <iostream>\nusing namespace std;\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}',
  java: 'import java.io.*;\n\tpublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World!");\n\t}\n}',
};

const ProblemExecPage = () => {
  const { id } = useParams(); 
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const [stdin, setStdin] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [result, setResult] = useState("");
  const [stdout, setStdout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  // Fetch problem using axios
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/problem/${id}`);
        if (response.status === 200) {
          setProblem(response.data);
          setStdin(response.data.testCases?.[0]?.ipData || "");
        }
      } catch (error) {
        console.error("Error fetching problem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  // Update code when language changes
  useEffect(() => {
    setCode(STARTER_CODE[language.toLowerCase()] || "");
  }, [language]);

  if (loading) {
    return <p className="text-white text-center mt-20 text-2xl">Loading...</p>;
  }
  if (!problem) {
    return <p className="text-white text-center mt-20 text-2xl">Problem not found</p>;
  }

  const handleCompile = async () => {
    setIsLoading2(true);
    // Removed setCompilationError since we don't have that state defined
    try {
      const response = await fetch("http://localhost:8000/judge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, stdin: stdin.trim(), language }),
      });

      const data = await response.json();
      // Just show the output for the first test case (for simplicity)
      setStdout(data.stdout || "No output");
    } catch (error) {
      setResult("⚠️ Error executing code");
      setStdout("");
    } finally {
      setIsLoading2(false);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const testCaseResults = [];

    try {
      // Loop through each test case (note: we use problem.testCases here)
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCase = problem.testCases[i];

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
        const actualOutput = data.stdout?.trim();

        if (actualOutput === expectedOutput) {
          testCaseResults.push(`Test Case ${i + 1}: ✅ Correct Answer`);
        } else {
          testCaseResults.push(`Test Case ${i + 1}: ❌ Wrong Answer`);
        }
      }

      setResult(testCaseResults.join("\n"));
      setStdout("");
    } catch (error) {
      setResult("⚠️ Error executing code");
      setStdout("");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-gray-950 h-screen flex flex-col">
      <div className="flex flex-1 h-full gap-8 p-7">
        {/* Left Section: Problem Details */}
        <div className="w-1/2 bg-gray-400 p-6 rounded-xl shadow-md flex flex-col h-full overflow-y-auto">
          <h1 className="text-4xl font-bold mb-4 p-2 text-gray-900">
            {problem.questionTitle}
          </h1>
          <div className="bg-gray-300 rounded-2xl my-5 p-4">
            <p className="text-black text-lg p-2">
              {problem.questionDesc}
            </p>
            <p className="mt-4 text-lg p-2">
              Difficulty:{" "}
              <span className={`font-semibold text-lg p-2 ${getDifficultyColor(problem.problemDifficulty)}`}>
                {problem.questionDifficulty}
              </span>
            </p>
            <p className="mt-4 text-lg p-2">
              Created by: {problem.createdBy?.StudentName}
            </p>
            <div className="mt-4 text-lg p-2">
              <strong>Tags:</strong> {problem.tags.join(", ")}
            </div>
          </div>

          {/* Input / Output Section */}
          {problem.testCases && problem.testCases.length > 0 ? (
            <div className="rounded-2xl my-5 flex gap-8">
              <div className="bg-gray-300 rounded-2xl p-5 w-1/2">
                <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">Input:</h3>
                {problem.testCases.map((testCase, index) => (
                  <p key={testCase.testCaseId} className="text-black">
                    {testCase.ipData}
                  </p>
                ))}
              </div>
              <div className="bg-gray-300 rounded-2xl p-5 w-1/2">
                <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">Output:</h3>
                {problem.testCases.map((testCase, index) => (
                  <p key={testCase.testCaseId} className="text-black">
                    {testCase.opData}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No test cases available.</p>
          )}

          {/* Additional Sections */}
          <div className="bg-gray-300 rounded-2xl my-5 p-4">
            <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">Similar Problems:</h3>
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
              minimap: { enabled: false },
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              formatOnPaste: true,
              formatOnType: true,
              autoClosingBrackets: "always",
              quickSuggestions: true,
              bracketPairColorization: { enabled: true },
            }}
            onChange={(newValue) => setCode(newValue)}
          />

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Input for your Program (stdin):</h3>
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
  );
};

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

export default ProblemExecPage;
