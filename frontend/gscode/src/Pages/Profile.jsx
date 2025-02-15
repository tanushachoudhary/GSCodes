import React from "react";
import HeatMap from "../components/HeatMap";
const dummyUserData = {
    username:"",
    name:"",
    n_prob:0,
}

function Profile(){
    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-blue-950">
            <div className="flex flex-col w-5xl h-screen justify-center items-center border border-white">
                <div className="flexflex-col">
                    <div id="userImg" className="bg-black"></div>
                </div>
                <div className="flex justify-center items-center bg-indigo-950">
                    <HeatMap/>
                </div>
            </div>            
        </div>
    )
}

export default Profile;