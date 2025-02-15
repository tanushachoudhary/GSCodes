import React from "react";
import Problem from "./Problem";
import Problems from "../../../assets/Data/Problems";

function ListProblems(){
    return(
        <div className="flex flex-col bg-blue-950 w-2xl rounded-lg ">
            <h1 className="text-black font-serif text-2xl pb-0 p-5">Problems solved</h1>
            {
                Problems.map((problem)=>(
                    <Problem title={problem.title}/>
                ))
            }
        </div>
    )
}

export default ListProblems;