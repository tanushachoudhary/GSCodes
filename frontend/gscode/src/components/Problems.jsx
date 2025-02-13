import React, { useState } from "react";

const Problems = () => {
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers in an array that add up to a target sum.",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Reverse Linked List",
      description: "Reverse a singly linked list.",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      description:
        "Determine the length of the longest substring without repeating characters.",
      difficulty: "Hard",
    },
    {
      id: 4,
      title: "N Queen",
      description: "Solve the N-Queens problem using backtracking.",
      difficulty: "Hard",
    },
    {
      id: 5,
      title: "Rat in a Maze",
      description:
        "Find a path for the rat to reach the destination in a maze.",
      difficulty: "Medium",
    },
    {
      id: 6,
      title: "Merge 2 BSTs",
      description: "Merge two binary search trees into one balanced BST.",
      difficulty: "Easy",
    },
    {
      id: 7,
      title: "K Most Frequent Elements",
      description: "Find the K most frequent elements in an array.",
      difficulty: "Medium",
    },
    {
      id: 8,
      title: "Valid Parenthesis Checker",
      description: "Check if the given string of parentheses is balanced.",
      difficulty: "Easy",
    },
    {
      id: 9,
      title: "Maximum Path Sum",
      description: "Find the maximum path sum in a binary tree.",
      difficulty: "Hard",
    },
    {
      id: 10,
      title: "Frog Jump",
      description:
        "Determine if the frog can cross the river by jumping on stones.",
      difficulty: "Medium",
    },
  ]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="p-8 mx-auto font-georgia">
      <h1 className="text-white text-center text-5xl font-bold">Problems</h1>
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-2 mt-7">
        {problems.map((problem) => (
          <li
            key={problem.id}
            className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:border-gray-500 cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{problem.title}</h3>
            <div className="mt-4 flex justify-between ">
              <p className="text-gray-400">{problem.description}</p>
              <p
                className={`mt-2 font-semibold ${getDifficultyColor(
                  problem.difficulty
                )}`}
              >
                {problem.difficulty}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problems;
