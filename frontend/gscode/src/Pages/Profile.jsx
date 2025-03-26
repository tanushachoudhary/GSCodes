import React, { useContext, useEffect, useState } from "react";
import HeatMapData from "../assets/Data/HeatmapStatic";
import HeatMapBar from "../components/ProfilePage/HeatMap/HeatMapBar";
import ListProblems from "../components/ProfilePage/SolvedProblems/ListProblems";
import UserBar from "../components/ProfilePage/UserSection/UserBar";
import Header from "../components/Header";
import { DataContext } from "../context/DataProvider";
const dummyUserData = {
    username:"",
    name:"",
    n_prob:0,
}

function Profile(){
    let [submissions, setSubmissions] = useState(0);
    const {account} = useContext(DataContext);

    useEffect(()=>{
        setSubmissions(HeatMapData.reduce((acc, day)=> acc+day.commits, 0));
    },[]);

    return(
        <>
        <div className="pb-20">
        <Header/>
        </div>
        <div className="flex w-full h-full justify-center items-center bg-indigo-950 text-white">
            <div className="flex flex-col w-72 h-screen justify-center items-center p-10">
                <UserBar name={account.name} username={account.username}/>
            </div>
            <div className="flex flex-col w-3xl h-screen justify-center items-center p-10">
                <div className="flex flex-col rounded-lg justify-center items-center py-5 bg-blue-600">
                    <h1 className="text-2xl font-medium ml-5">{submissions} Submissions in last 6 months</h1>
                    <HeatMapBar/>
                </div>
                <div className="flex flex-col h-80 m-5 rounded-lg overflow-y-scroll no-scrollbar">
                    <ListProblems/>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Profile;