const HeatMapData = [
  { date: "2024-12-01", commits: 15 },
  { date: "2024-12-02", commits: 6 },
  { date: "2024-12-03", commits: 19 },
  { date: "2024-12-04", commits: 20 },
  { date: "2024-12-05", commits: 17 },
  { date: "2024-12-06", commits: 6 },
  { date: "2024-12-07", commits: 4 },
  { date: "2024-12-08", commits: 3 },
  { date: "2024-12-09", commits: 15 },
  { date: "2024-12-10", commits: 8 },
  { date: "2024-12-11", commits: 15 },
  { date: "2024-12-12", commits: 8 },
  { date: "2024-12-13", commits: 6 },
  { date: "2024-12-14", commits: 16 },
  { date: "2024-12-15", commits: 18 },
  { date: "2024-12-16", commits: 12 },
  { date: "2024-12-17", commits: 0 },
  { date: "2024-12-18", commits: 18 },
  { date: "2024-12-19", commits: 20 },
  { date: "2024-12-20", commits: 9 },
  { date: "2024-12-21", commits: 14 },
  { date: "2024-12-22", commits: 17 },
  { date: "2024-12-23", commits: 20 },
  { date: "2024-12-24", commits: 10 },
  { date: "2024-12-25", commits: 13 },
  { date: "2024-12-26", commits: 11 },
  { date: "2024-12-27", commits: 12 },
  { date: "2024-12-28", commits: 13 },
  { date: "2024-12-29", commits: 10 },
  { date: "2024-12-30", commits: 1 },
  { date: "2024-12-31", commits: 18 },
  { date: "2025-01-01", commits: 9 },
  { date: "2025-01-02", commits: 6 },
  { date: "2025-01-03", commits: 4 },
  { date: "2025-01-04", commits: 5 },
  { date: "2025-01-05", commits: 4 },
  { date: "2025-01-06", commits: 9 },
  { date: "2025-01-07", commits: 10 },
  { date: "2025-01-08", commits: 11 },
  { date: "2025-01-09", commits: 13 },
  { date: "2025-01-10", commits: 16 },
  { date: "2025-01-11", commits: 16 },
  { date: "2025-01-12", commits: 20 },
  { date: "2025-01-13", commits: 3 },
  { date: "2025-01-14", commits: 17 },
  { date: "2025-01-15", commits: 3 },
  { date: "2025-01-16", commits: 17 },
  { date: "2025-01-17", commits: 0 },
  { date: "2025-01-18", commits: 13 },
  { date: "2025-01-19", commits: 10 },
  { date: "2025-01-20", commits: 10 },
  { date: "2025-01-21", commits: 6 },
  { date: "2025-01-22", commits: 6 },
  { date: "2025-01-23", commits: 14 },
  { date: "2025-01-24", commits: 18 },
  { date: "2025-01-25", commits: 20 },
  { date: "2025-01-26", commits: 2 },
  { date: "2025-01-27", commits: 15 },
  { date: "2025-01-28", commits: 15 },
  { date: "2025-01-29", commits: 14 },
  { date: "2025-01-30", commits: 17 }
];

let today = new Date();
let _6MonthAgo = new Date();
_6MonthAgo = _6MonthAgo.setMonth(today.getMonth()-6);

for(let i=new Date(_6MonthAgo); i<=today; i.setDate(i.getDate()+1)){
  if(!HeatMapData.some(entry => entry.date === i.toISOString().split('T')[0])){
    HeatMapData.push({
      date: i.toISOString().split('T')[0],
      commits: 0,
    })
  }
}

HeatMapData.sort((a,b)=> new Date(a.date) - new Date(b.date));

export default HeatMapData;
