import React from "react";
import "././badminton.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "../../components/CricPieChart/Chart";
import { badmintonData } from "../../data.js";
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
            <Tooltip
              contentStyle={{ borderRadius: "10px", padding: "0 8px 0 8px" }}
            />
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
        <div className="right">
          <p>Win Percentage</p>
          <div className="container">
            <div className="featuredChart">
              <CircularProgressbar value={50} text="50%" strokeWidth={5} />
            </div>
            <div className="content">
              <p>Total Matches Played</p>
              <p className="matchesText">370</p>
            </div>
          </div>
        </div>
        <div className="left">
          <p className="title">Singles vs Doubles</p>
          <Chart {...badmintonData} />

          <div className="text">
            <p>Singles</p>
            <div className="color"></div>

            <p>Doubles</p>
            <div className="color2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badminton;
