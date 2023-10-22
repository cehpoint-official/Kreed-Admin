import React from "react";
import "././cricket.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Cricket = () => {
  const data = [
    {
      name: "Posts",
      total: 400,
    },
    {
      name: "Uploads(tbs)",

      total: 2210,
    },
    {
      name: "comments",

      total: 1200,
    },
    {
      name: "likes",

      total: 1700,
    },
  ];
  return (
    <div className="cricket">
      <h1>Cricket stats</h1>
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
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="total"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="lowerSec">
        
      </div>
    </div>
  );
};

export default Cricket;
