const problems = [
  {
    problemID: 1,
    problemTitle: "Add Numbers",
    problemDescription:
      "You need to write a function that takes two numbers as input and prints their sum",
    problemDescriptionDetail:
      "You need to write a function that takes two numbers as input and prints their sum",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Array", "Two Pointers"],
    inputTestCases: [
      { input: "1 2", output: "3" },
      { input: "4 9", output: "13" },
      { input: "8 12", output: "20" },
    ],
    expectedOutput: ["3", "13", "20"],
  },
  {
    problemID: 2,
    problemTitle: "Assignment Due",
    problemDescription:
      "You are eagerly awaiting for the upcoming Technex event organized by IIT BHU Varanasi! However, you also have an assignment due. The deadline for the assignment is in Y days, and it takes you X days to complete it. Determine whether you can finish the assignment on or before the deadline.",
    problemDescriptionDetail:
      "You are eagerly awaiting for the upcoming Technex event organized by IIT BHU Varanasi! However, you also have an assignment due. The deadline for the assignment is in Y days, and it takes you X days to complete it. Determine whether you can finish the assignment on or before the deadline.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Linked List", "Recursion"],
    inputTestCases: [
      { input: "1 2", output: "YES" },
      { input: "2 2", output: "YES" },
      { input: "3 2", output: "NO" },
    ],
    expectedOutput: ["YES", "YES", "NO"],
  },
  {
    problemID: 3,
    problemTitle: "Longest Substring Without Repeating Characters",
    problemDescription:
      "Determine the length of the longest substring without repeating characters.",
    problemDescriptionDetail:
      "Given a string, find the length of the longest substring that contains only unique characters. Use sliding window technique for optimal performance.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["String", "Sliding Window"],
    inputTestCases: [
      { input: "abcabcbb", output: "3" },
      { input: "bbbbb", output: "1" },
      { input: "pwwkew", output: "3" },
    ],
    expectedOutput: ["3", "1", "3"],
  },
  {
    problemID: 4,
    problemTitle: "N Queen",
    problemDescription: "Solve the N-Queens problem using backtracking.",
    problemDescriptionDetail:
      "Place N queens on an N×N chessboard such that no two queens threaten each other. Print all possible board configurations.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["Backtracking"],
    inputTestCases: [
      { input: "4", output: "Solution exists" },
      { input: "5", output: "Solution exists" },
      { input: "6", output: "Solution exists" },
    ],
    expectedOutput: ["Solution exists", "Solution exists", "Solution exists"],
  },
  {
    problemID: 5,
    problemTitle: "Rat in a Maze",
    problemDescription:
      "Find a path for the rat to reach the destination in a maze.",
    problemDescriptionDetail:
      "Given a maze in the form of a binary matrix, find a path from the top-left corner to the bottom-right corner. The rat can only move in certain directions.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Backtracking", "Matrix"],
    inputTestCases: [
      { input: "1 0 0 0 1 0 1 1 1 0", output: "YES" },
      { input: "1 0 1 0 0 0 1 1 1 0", output: "NO" },
      { input: "1 1 0 1 1 0 0 1 1 0", output: "YES" },
    ],
    expectedOutput: ["YES", "NO", "YES"],
  },
  {
    problemID: 6,
    problemTitle: "Merge 2 BSTs",
    problemDescription: "Merge two binary search trees into one balanced BST.",
    problemDescriptionDetail:
      "Given two Binary Search Trees (BSTs), merge them into a single balanced BST while maintaining the BST properties.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Binary Search Tree", "Divide and Conquer"],
    inputTestCases: [
      { input: "2 3 4 5 6 7 8", output: "3 4 5 6 7 8" },
      { input: "10 20 30 40 50", output: "10 20 30 40 50" },
    ],
    expectedOutput: ["3 4 5 6 7 8", "10 20 30 40 50"],
  },
  {
    problemID: 7,
    problemTitle: "K Most Frequent Elements",
    problemDescription: "Find the K most frequent elements in an array.",
    problemDescriptionDetail:
      "Given an array of integers, return the k most frequent elements. Solve in O(n log k) time using a min-heap.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Heap", "Hash Table", "Sorting"],
    inputTestCases: [
      { input: "1 1 1 2 2 3 3 3", output: "3 1" },
      { input: "4 5 6 7 8 8 7 6 5", output: "7 8" },
    ],
    expectedOutput: ["3 1", "7 8"],
  },
  {
    problemID: 8,
    problemTitle: "Valid Parenthesis Checker",
    problemDescription: "Check if the given string of parentheses is balanced.",
    problemDescriptionDetail:
      "Given a string containing only '(', ')', '{', '}', '[' and ']', determine if the input string is valid (i.e., properly nested and matched).",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Stack", "String"],
    inputTestCases: [
      { input: "()", output: "YES" },
      { input: "({[()]})", output: "YES" },
      { input: "(}", output: "NO" },
    ],
    expectedOutput: ["YES", "YES", "NO"],
  },
  {
    problemID: 9,
    problemTitle: "Maximum Path Sum",
    problemDescription: "Find the maximum path sum in a binary tree.",
    problemDescriptionDetail:
      "Given a binary tree, find the maximum sum path from any node to any other node. The path may or may not include the root.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["Tree", "Dynamic Programming"],
    inputTestCases: [
      { input: "1 -2 3", output: "4" },
      { input: "2 1 3 4 5", output: "11" },
    ],
    expectedOutput: ["4", "11"],
  },
  {
    problemID: 10,
    problemTitle: "Frog Jump",
    problemDescription:
      "Determine if the frog can cross the river by jumping on stones.",
    problemDescriptionDetail:
      "A frog starts at stone 0 and wants to reach the last stone. The frog can jump either k-1, k, or k+1 units, where k is the frog’s last jump distance. Determine if the frog can cross.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Dynamic Programming", "Greedy"],
    inputTestCases: [
      { input: "0 1 2 3 4 5 6 7 8", output: "YES" },
      { input: "0 1 2 4 5", output: "NO" },
    ],
    expectedOutput: ["YES", "NO"],
  },
];

export default problems;
