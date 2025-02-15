import React from "react";
import HeatMapData from "../../../assets/Data/HeatmapStatic";


const HeatMap = ({data}) => {
  const getColor = (commits) => {
    if (commits === 0) return "bg-gray-200";
    if (commits < 5) return "bg-orange-200";
    if (commits < 10) return "bg-orange-400";
    if (commits < 15) return "bg-orange-600";
    return "bg-orange-800";
  }
  return (
    <div className="flex w-24 flex-wrap gap-0.5 p-5 bg-blue-950 rounded-ls shadow-lg">
      {data.map((day, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded ${getColor(day.commits)}`}
          title={`${new Date(day.date).toLocaleDateString()} : ${day.commits} submissions`}
        ></div>
      ))}
    </div>
  );
};

export default HeatMap;
