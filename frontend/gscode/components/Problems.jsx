import React, { useState } from "react";
import "./Problems.css";

const Problems = () => {
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: "Two Sum",
      description: "Find two numbers in an array that add up to a target sum.",
    },
    {
      id: 2,
      title: "Reverse Linked List",
      description: "Reverse a singly linked list.",
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      description:
        "Determine the length of the longest substring without repeating characters.",
    },
    {
      id: 4,
      title: "N Queen",
      description: "Solve the N-Queens problem using backtracking.",
    },
    {
      id: 5,
      title: "Rat in a Maze",
      description:
        "Find a path for the rat to reach the destination in a maze.",
    },
    {
      id: 6,
      title: "Merge 2 BSTs",
      description: "Merge two binary search trees into one balanced BST.",
    },
    {
      id: 7,
      title: "K Most Frequent Elements",
      description: "Find the K most frequent elements in an array.",
    },
    {
      id: 8,
      title: "Valid Parenthesis Checker",
      description: "Check if the given string of parentheses is balanced.",
    },
    {
      id: 9,
      title: "Maximum Path Sum",
      description: "Find the maximum path sum in a binary tree.",
    },
    {
      id: 10,
      title: "Frog Jump",
      description:
        "Determine if the frog can cross the river by jumping on stones.",
    },
  ]);

  return (
    <div className="container">
      <h1>Problems</h1>
      <ul className="problems-list">
        {problems.map((problem) => (
          <li key={problem.id} className="problem-item">
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problems;
