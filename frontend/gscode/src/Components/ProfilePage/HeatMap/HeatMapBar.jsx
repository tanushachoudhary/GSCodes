import React, { useEffect, useState } from 'react'
import HeatMap from './HeatMap'
import HeatMapData from '../../../assets/Data/HeatmapStatic';

const defaultMonthlyData = [
]

function HeatMapBar(){
    const [currMonthData, setCurrMonthData] = useState(defaultMonthlyData);

    useEffect(()=>{
        let today = new Date();
        let past12Months = [];

        //we will create an array of objects that will contain the months and year attributes of the past 12 months
        for(let i=0;i<6;i++){
            let date = new Date();
            date.setMonth(today.getMonth()-i);
            past12Months.push({month: date.getMonth(), year: date.getFullYear()});
        }

        //now we want to group data according to months,to do that we will use array.reduce
        let groupedData = past12Months.reduce((accumulator, {month, year})=>{
            accumulator[`${year}-${month}`] = HeatMapData.filter((day)=>{
                return new Date(day.date).getMonth() === month 
                &&
                new Date(day.date).getFullYear() === year
            })
            return accumulator;
        },{}) 

        console.log(groupedData);
        setCurrMonthData(groupedData);
    },[])

    let months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    return (
        <div className="flex lg:w-2xl justify-center items-center gap-4 overflow-x-scroll no-scrollbar">
          {Object.entries(currMonthData).map(([key, data]) => {
            const [year, month] = key.split("-");
            return (
            <div  key={key} className='flex flex-col justify-center '>
              <div className="flex flex-col h-[165px] items-center">
                <HeatMap data={data} />
              </div>
              <div className='flex justify-center items-center'>
                <h3>{months[month]}</h3>
              </div>  
            </div>
            );
          })}
        </div>
      );
}

export default HeatMapBar;