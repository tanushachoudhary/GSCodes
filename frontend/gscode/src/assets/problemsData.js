const problems = [
  {
    problemID: 1,
    problemTitle: "Two Sum",
    problemDescription:
      "Find two numbers in an array that add up to a target sum.",
    problemDescriptionDetail:
      "Given an array of integers and a target sum, return the indices of the two numbers that add up to the target. You may assume each input has exactly one solution, and you may not use the same element twice. The solution should be efficient, preferably using a hash map to achieve O(n) time complexity.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Array", "Hash Table", "Two Pointers"],
  },
  {
    problemID: 2,
    problemTitle: "Reverse Linked List",
    problemDescription: "Reverse a singly linked list.",
    problemDescriptionDetail:
      "Given the head of a singly linked list, reverse the list and return the new head. Implement both iterative and recursive solutions. Consider the constraints of space complexity and optimize the solution if possible.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Linked List", "Recursion"],
  },
  {
    problemID: 3,
    problemTitle: "Longest Substring Without Repeating Characters",
    problemDescription:
      "Determine the length of the longest substring without repeating characters.",
    problemDescriptionDetail:
      "Given a string s, find the length of the longest contiguous substring that contains only unique characters. The optimal solution uses the sliding window technique to achieve O(n) time complexity.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["String", "Sliding Window"],
  },
  {
    problemID: 4,
    problemTitle: "N Queen",
    problemDescription: "Solve the N-Queens problem using backtracking.",
    problemDescriptionDetail:
      "Place N queens on an N×N chessboard such that no two queens threaten each other. Print all possible board configurations. Use backtracking to efficiently explore valid board placements while pruning invalid states.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["Backtracking"],
  },
  {
    problemID: 5,
    problemTitle: "Rat in a Maze",
    problemDescription:
      "Find a path for the rat to reach the destination in a maze.",
    problemDescriptionDetail:
      "Given a maze represented as an N×N matrix where 1 represents a valid path and 0 represents a blocked path, find a path for the rat to travel from the top-left corner to the bottom-right corner. Use backtracking to explore all possible routes while ensuring optimal traversal.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Backtracking", "Matrix"],
  },
  {
    problemID: 6,
    problemTitle: "Merge 2 BSTs",
    problemDescription: "Merge two binary search trees into one balanced BST.",
    problemDescriptionDetail:
      "Given two Binary Search Trees (BSTs), merge them into a single balanced BST while maintaining the BST properties. Use in-order traversal to extract elements, merge them into a sorted array, and then build a balanced BST from it.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Binary Search Tree", "Divide and Conquer"],
  },
  {
    problemID: 7,
    problemTitle: "K Most Frequent Elements",
    problemDescription: "Find the K most frequent elements in an array.",
    problemDescriptionDetail:
      "Given an array of integers, return the K most frequently occurring elements. Solve this problem efficiently using a hash table to count occurrences and a min-heap (priority queue) to keep track of the top K elements.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Heap", "Hash Table", "Sorting"],
  },
  {
    problemID: 8,
    problemTitle: "Valid Parenthesis Checker",
    problemDescription: "Check if the given string of parentheses is balanced.",
    problemDescriptionDetail:
      "Given a string containing only '(', ')', '{', '}', '[' and ']', determine if the input string is valid. The string is valid if all open brackets are closed by the same type of brackets in the correct order. Use a stack-based approach to efficiently check for validity in O(n) time.",
    problemDifficulty: "Easy",
    problemCreatedBy: "Admin",
    problemTags: ["Stack", "String"],
  },
  {
    problemID: 9,
    problemTitle: "Maximum Path Sum",
    problemDescription: "Find the maximum path sum in a binary tree.",
    problemDescriptionDetail:
      "Given a binary tree, find the maximum sum path between any two nodes. A valid path may start and end at any node in the tree. Use depth-first search (DFS) with a recursive approach to find the maximum sum while keeping track of local and global maxima.",
    problemDifficulty: "Hard",
    problemCreatedBy: "Admin",
    problemTags: ["Tree", "Dynamic Programming"],
  },
  {
    problemID: 10,
    problemTitle: "Frog Jump",
    problemDescription:
      "Determine if the frog can cross the river by jumping on stones.",
    problemDescriptionDetail:
      "A frog starts at stone 0 and wants to reach the last stone. The frog can jump either k-1, k, or k+1 units, where k is the frog’s last jump distance. Given an array representing the positions of stones, determine if the frog can cross by landing on each stone exactly once. Use dynamic programming and memoization for an efficient solution.",
    problemDifficulty: "Medium",
    problemCreatedBy: "Admin",
    problemTags: ["Dynamic Programming", "Greedy"],
  },
];

export default problems;
