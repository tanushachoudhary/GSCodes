import React, { useEffect, useState } from "react";
import HeatMapData from "../assets/Data/HeatmapStatic";
import HeatMapBar from "../components/ProfilePage/HeatMap/HeatMapBar";

const dummyUserData = {
    username:"",
    name:"",
    n_prob:0,
}

function Profile(){
    let [submissions, setSubmissions] = useState(0);

    useEffect(()=>{
        setSubmissions(HeatMapData.reduce((acc, day)=> acc+day.commits, 0));
    },[]);

    return(
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-indigo-950">
            <div className="flex flex-col w-5xl h-screen justify-center items-center p-10">
                <div className="flex flex-col justify-center items-center py-5 bg-blue-950">
                    <h1 className="text-2xl font-medium ml-5">{submissions} submissions in last 6 months</h1>
                    <HeatMapBar/>
                </div>
            </div>            
        </div>
    )
}

export default Profile;