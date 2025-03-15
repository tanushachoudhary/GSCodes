import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import problems from "../assets/problemsData";
import { API } from "../service/api";

const ProblemDetail = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("C++");

  const { id } = useParams();
  const problem = problems.find((p) => p.problemID === parseInt(id));

  // Boilerplate code for different languages
  const boilerplateCode = {
    "C++": `#include <bits/stdc++.h>
using namespace std;

int main( ) {
    // Write your solution here
    return 0;
}`,
    "Java": `public class Main {
    public static void main(String[ ] args) {
        // Write your solution here
    }
}`,
  };

  // Set the default code on component mount and when language changes
  useEffect(() => {
    setCode(boilerplateCode[language]);
  }, [language]);

  if (!problem) {
    return <p>Problem not found</p>;
  }

  return (
    <div className="bg-gray-950 h-screen p-4 overflow-hidden">
      <button>Update</button>
      <div className="flex h-full gap-5">
        {/* Left Section: Problem Details */}
        <div className="w-full md:w-1/2 bg-gray-400 p-6 rounded-xl shadow-md justify-center">
          <h1 className="text-4xl font-bold mb-4 p-2 text-gray-900">
            {problem.problemTitle}
          </h1>
          <div className="bg-gray-300 rounded-2xl my-5 p-4">
            <p className="text-black text-lg p-2">
              {problem.problemDescriptionDetail}
            </p>
            <p className="mt-4 text-lg p-2">
              Difficulty :{" "}
              <span
                className={`font-semibold text-lg p-2 ${getDifficultyColor(
                  problem.problemDifficulty
                )}`}
              >
                {problem.problemDifficulty}
              </span>
            </p>
            <p className="mt-4 text-lg p-2">
              Created by : {problem.problemCreatedBy}
            </p>
            <div className="mt-4 text-lg p-2">
              <strong>Tags :</strong> {problem.problemTags.join(", ")}
            </div>
          </div>
          <div className="bg-gray-300 rounded-2xl my-5 p-4">
            <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">Constraints:</h3>
            <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900">Similar Problems:</h3>
            <h3 className="text-2xl font-bold mb-4 p-1 text-gray-900 underline"> <a href="#">Report any issue</a> </h3>
          </div>
        </div>

        {/* Right Section: Code Editor */}
        <div className="w-full md:w-1/2 bg-gray-400 p-7 rounded-xl shadow-md flex flex-col">
          <label
            htmlFor="language"
            className="text-gray-900 font-semibold text-xl mb-2"
          >
            Choose your language:
          </label>
          <select
            id="language"
            className="p-2 bg-gray-600 text-white rounded-md mt-2 w-full sm:w-auto"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
          </select>

          <textarea
            className="bg-gray-300 flex-grow w-full p-2 border rounded-md mt-4 resize-none text-xl"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <div className="flex justify-end gap-4 mt-4 flex-wrap">
            <button className="px-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer w-36 mb-2 sm:mb-0">
              Run Code
            </button>
            <button className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer w-36 mb-2 sm:mb-0">
              Submit
            </button>
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

export default ProblemDetail;
