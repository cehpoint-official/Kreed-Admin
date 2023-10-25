import React from "react";
import "../BarChart/barchart.scss";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const BarchartBox = (props) => {
  return (
    <div className="barchart">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="89%">
          <BarChart
            
            data={props.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="games" />
            <Tooltip   contentStyle={{background : "white" ,borderRadius : "5px" , padding : "0 10px 10px 10px"}} />
            <Legend />
            <Bar dataKey={props.dataKey} fill={props.color} />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarchartBox;
