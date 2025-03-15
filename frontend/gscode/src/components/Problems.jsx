import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import problems from "../assets/problemsData";
import Header from "./Header";
import Footer from "./Footer";
import { DataContext } from "../context/DataProvider";
import { API } from "../service/api";


const Problems = () => {
  const [problemList, setProblemList] = useState(problems);
  const {account} = useContext(DataContext);

  
const testing = {
  questionId: 7,
  questionDesc: "naofnowfow",
  questionTitle: "Two Sum",
  questionDifficulty: "Easy",
  tags: ["arrays", "Strings"],
  testCases: [
    {
      testCaseId: 1,
      ipData: 1,
      opData: 1,
    },
  ],
}

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

  const onClickAdd = async() =>{
    try{
      let response =await API.adminAddQuestion(testing);

      if(response?.status === 200 || response?.status === 201){
        console.log("Question added successfully", response);
      }else{
        console.log("Failed to add question");
      }
    }catch(err){
      console.log("Error: ", err);
    }
  }

  return (
    <div className="bg-gray-950">
      <Header />
      <div className="max-w-7xl m-auto">
        <div className="p-8 mx-auto font-georgia bg-gray-950 mt-20">
          <h1 id="problems" className="text-white text-center text-5xl font-bold">Problems</h1>
          {
            account.role==="Admin" &&
            <button onClick={onClickAdd} className="border border-pink text-amber-50">Add problem</button>
          }
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-7">
            {problemList.map((problem) => (
              <Link
                key={problem.problemID}
                to={`/problem/${problem.problemID}`}
                className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-103 hover:border-gray-500 cursor-pointer"
              >
                <h3 className="text-xl font-semibold">
                  {problem.problemTitle}
                </h3>
                <div className="mt-4 flex justify-between">
                  <p className="text-gray-400">{problem.problemDescription}</p>
                  <p
                    className={`mt-2 font-semibold ${getDifficultyColor(
                      problem.problemDifficulty
                    )}`}
                  >
                    {problem.problemDifficulty}
                  </p>
                  {
                    account.username === problem.createdBy ?
                    <>
                     <button>Update</button>
                     <button>Delete</button>
                    </>
                    :
                    <>
                    </>
                  }
                </div>
                <div className="mt-2">
                  <p className="text-gray-500">
                    Tags: {problem.problemTags.join(", ")}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
          <div className="my-12 flex justify-center">
            <Link to="/add-problem">
              <button className="bg-blue-600 text-xl text-white py-5 px-20 rounded-xl transition-all duration-300 hover:scale-103 hover:bg-blue-800 cursor-pointer">
                ADD A PROBLEM
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Problems;
