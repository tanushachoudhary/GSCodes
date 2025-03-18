import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import problems from "../assets/problemsData";
import Header from "./Header";
import Footer from "./Footer";
import { DataContext } from "../context/DataProvider";
import { API } from "../service/api";

const Problems = () => {
  const [problemList, setProblemList] = useState(problems);
  const { account } = useContext(DataContext);


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

  const fetchData = async() =>{
    let problems = await API.getAllProblems();
    try{
      if(!problems){
        console.log("error in response");
      }else{
        console.log(problems.data);
        setProblemList(problems.data);
      }
    }catch(err){
      console.lof(err,"Error in fetching data");
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="bg-gray-950">
      <Header />
      <div className="max-w-7xl m-auto">
        <div className="p-8 mx-auto font-georgia bg-gray-950 mt-20">
          <h1
            id="problems"
            className="text-white text-center text-5xl font-bold"
          >
            Problems
          </h1>
      
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-7">
            {problemList.map((problem) => (
              <Link
                key={problem.problemID}
                to={`/problem/${problem.problemID}`}
                className="border-2 border-gray-700 rounded-xl p-6 bg-gray-900 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-103 hover:border-gray-500 cursor-pointer"
              >
                <h3 className="text-xl font-semibold">
                  {problem.questionTitle}
                </h3>
                <div className="mt-4 flex justify-between">
                  <p className="text-gray-400">{problem.questionDesc}</p>
                  <p
                    className={`mt-2 font-semibold ${getDifficultyColor(
                      problem.questionDifficulty
                    )}`}
                  >
                    {problem.questionDifficulty}
                  </p>
                  {account._id === problem.createdBy ? (
                    <>
                      <button>Update</button>
                      <button>Delete</button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-gray-500">
                    Tags: {problem.tags}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
          <div className="my-12 flex flex-col gap-12 justify-center">
          {account._id && account.role === "Admin" && (
            <Link
            to="/add-problem"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="bg-blue-600 text-xl text-white py-5 px-20 rounded-xl transition-all duration-300 hover:scale-103 hover:bg-blue-800 cursor-pointer">
              ADD A PROBLEM
            </button>
          </Link>
          )}

            {account._id && account.role==="Admin" &&
            <Link
              to="/edit-problem"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="bg-blue-600 text-xl text-white py-5 px-20 rounded-xl transition-all duration-300 hover:scale-103 hover:bg-blue-800 cursor-pointer">
                EDIT PROBLEM
              </button>
            </Link>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Problems;
