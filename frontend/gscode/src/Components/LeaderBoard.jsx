import React from "react";

const LeaderBoard = () => {
  // Demo user data
  const users = [
    { id: 1, name: "Alice", problemsSolved: 7, submissions: 50 },
    { id: 2, name: "Bob", problemsSolved: 5, submissions: 30 },
    { id: 3, name: "Charlie", problemsSolved: 6, submissions: 40 },
    { id: 4, name: "David", problemsSolved: 4, submissions: 25 },
    { id: 5, name: "Eve", problemsSolved: 3, submissions: 20 }
  ];

  // Sort users by problems solved in descending order
  const sortedUsers = [...users].sort((a, b) => b.problemsSolved - a.problemsSolved);

  return (
    <div className="w-full pt-15 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Leaderboard</h2>
      <table className="w-full text-left border-collapse text-xl">
        <thead>
          <tr className="border-b border-gray-700 text-2xl">
            <th className="p-4">Rank</th>
            <th className="p-4">Name</th>
            <th className="p-4">Problems Solved</th>
            <th className="p-4">Submissions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800 text-xl">
              <td className="p-4">{index + 1}</td>
              <td className="p-4 font-semibold">{user.name}</td>
              <td className="p-4 text-green-400 font-bold">{user.problemsSolved}</td>
              <td className="p-4">{user.submissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;