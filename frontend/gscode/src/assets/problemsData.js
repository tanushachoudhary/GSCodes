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
      "Determine whether you can finish the assignment on or before the deadline.",
    problemDescriptionDetail:
      "You are eagerly awaiting for the upcoming Technex event organized by IIT BHU Varanasi! However, you also have an assignment due. The deadline for the assignment is in Y days, and it takes you X days to complete it. Determine whether you can finish the assignment on or before the deadline.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Recursion", "If-Else"],
    inputTestCases: [
      { input: "1 2", output: "YES" },
      { input: "2 2", output: "YES" },
      { input: "3 2", output: "NO" },
    ],
    expectedOutput: ["YES", "YES", "NO"],
  },
  {
    problemID: 3,
    problemTitle: "Triangle Checking",
    problemDescription:
      "Please check if they can be the side lengths of a valid non-degenerate triangle.",
    problemDescriptionDetail:
      "You are given 3 sticks of length A, B and C. Please check if they can be the side lengths of a valid non-degenerate triangle. Recall that A, B and C can be the side-lengths of a non-degenerate triangle if and only if each of the following 3 conditions hold: A+B>C, B+C>A, A+C>B",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["String"],
    inputTestCases: [
      { input: "2 3 4", output: "Yes" },
      { input: "4 6 2", output: "No" },
      { input: "9 9 9", output: "Yes" },
    ],
    expectedOutput: ["Yes", "No", "Yes"],
  },
  {
    problemID: 4,
    problemTitle: "Count of set bits",
    problemDescription:
      "Write a program that takes an input integer N and prints the count of the set bits present in the number.",
    problemDescriptionDetail:
      "Write a program that takes an input integer N and prints the count of the set bits present in the number.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Bit Manipulation"],
    inputTestCases: [
      { input: "256", output: "1" },
      { input: "15", output: "4" },
    ],
    expectedOutput: ["1", "4"],
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
    problemTitle: "Saving Taxes",
    problemDescription:
      "Find the minimum amount of money you have to invest so that you don't have to pay taxes this year.",
    problemDescriptionDetail:
      "In Chefland, everyone who earns strictly more than Y rupees per year, has to pay a tax to Chef. Chef has allowed a special scheme where you can invest any amount of money and claim exemption for it. You have earned X (X>Y) rupees this year. Find the minimum amount of money you have to invest so that you don't have to pay taxes this year.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Divide and Conquer"],
    inputTestCases: [
      { input: "4" },
      { input: "4 2", output: "2" },
      { input: "8 7", output: "1" },
      { input: "5 1", output: "4" },
      { input: "2 1", output: "1" },
    ],
    expectedOutput: ["2", "1", "4", "1"],
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
    problemTitle: "Masterchef finals",
    problemDescription: "Check whether Chef made it to the top 10 or not",
    problemDescriptionDetail:
      "Chef has been working hard to compete in MasterChef. He is ranked X out of all contestants. However, only 10 contestants would be selected for the finals. Check whether Chef made it to the top 10 or not?",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Stack", "String"],
    inputTestCases: [
      { input: "4" },
      { input: "15", output: "NO" },
      { input: "10", output: "YES" },
      { input: "1", output: "YES" },
      { input: "50", output: "NO" },
    ],
    expectedOutput: ["NO", "YES", "YES", "NO"],
  },
  {
    problemID: 9,
    problemTitle: "Watson asks Does Permutation Exist",
    problemDescription:
      "Sherlock is not sure that a solution exists, so he asks you.",
    problemDescriptionDetail:
      "Watson gives an array A of N integers A1, A2, ..., AN to Sherlock. He wants Sherlock to reorganize the array in a way such that no two adjacent numbers differ by more than 1. Formally, if reorganized array is B1, B2, ..., BN, then the condition that | Bi - Bi + 1 | ≤ 1, for all 1 ≤ i < N(where |x| denotes the absolute value of x) should be met.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["Dynamic Programming"],
    inputTestCases: [
      { input: "2" },
      { input: "4" },
      { input: "3 2 2 3", output: "YES" },
      { input: "2" },
      { input: "1 5", output: "NO" },
    ],
    expectedOutput: ["YES", "NO"],
  },
  {
    problemID: 10,
    problemTitle: "Chef and String",
    problemDescription:
      "What is the maximum number of pairs that can be formed?",
    problemDescriptionDetail:
      "There are N students standing in a row and numbered 1 through N from left to right. You are given a string S with length N, where for each valid i, the i-th character of S is 'x' if the i-th student is a girl or 'y' if this student is a boy. Students standing next to each other in the row are friends. The students are asked to form pairs for a dance competition. Each pair must consist of a boy and a girl. Two students can only form a pair if they are friends. Each student can only be part of at most one pair. What is the maximum number of pairs that can be formed?",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["String", "Greedy"],
    inputTestCases: [
      { input: "3" },
      { input: "xy", output: "1" },
      { input: "xyxxy", output: "2" },
      { input: "yy", output: "0" },
    ],
    expectedOutput: ["1", "2", "0"],
  },
];

export default problems;
