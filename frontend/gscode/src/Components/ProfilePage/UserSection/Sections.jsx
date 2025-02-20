import React from "react";

function Sections({title}){
    return(
        <div>
            <div className="bg-slate-500 h-[1px] w-64 opacity-30"></div>
            <h1 className="my-2 text-xl">Community</h1>
            <div className="bg-slate-500 h-[1px] w-64 opacity-30"></div>
            <h1 className="my-2 text-xl">Languages</h1>
            <div className="bg-slate-500 h-[1px] w-64 opacity-30"></div>
            <h1 className="my-2 text-xl">Skills</h1>
        </div>
    )
}

export default Sections;