import React from "react";
import "././badminton.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Badminton = () => {
  const data = [
    {
      name: "Posts",
      total: 500,
    },
    {
      name: "Uploads(tbs)",
      total: 1810,
    },
    {
      name: "comments",
      total: 689,
    },
    {
      name: "likes",
      total: 868,
    },
  ];
  return (
    <div className="Badminton">
      <h1>Badminton stats</h1>
      <div className="upperSec" width="100%" height="100%">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="name"
              stackId="1"
              stroke="#94EBF5"
              fill="#94EBF5"
            />
            <Area
              type="monotone"
              dataKey="total"
              stackId="1"
              stroke="#94EBF5"
              fill="#94EBF5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="lowerSec">
        
      </div>
    </div>
  );
};

export default Badminton;
