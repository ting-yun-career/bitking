"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Color from 'color';
import { percent } from "@src/util/currency";

const DoughnutChart = () => {
  const theme = process.env.theme as any;
  const data = React.useMemo(() => ({
    labels: ["Profit", "Loss"],
    datasets: [
      {
        data: [28792.38, 955.93],
        backgroundColor: [Color(theme.profit).fade(0.3).string(), Color(theme.loss).fade(0.3).string()],
      },
    ],
  }), [theme]);

  const options: any = {
    cutout: "55%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: true,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  return (
    <div
      style={{
        position: "relative",
        width: "180px",
        height: "180px",
        margin: "auto",
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
        className="text-Profit-bold text-2xl font-semibold"
      >
        {percent(28792.38 / 955.93, true, 0)}
      </div>
    </div>
  );
};

export default DoughnutChart;
