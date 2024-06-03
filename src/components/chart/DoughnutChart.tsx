"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Color from 'color';

const DoughnutChart = () => {
  const theme = process.env.theme as any;
  const data = {
    labels: ["Value", "Remaining", "extra"],
    datasets: [
      {
        data: [35, 40, 25],
        backgroundColor: [Color(theme.profit).fade(0.3).string(), Color(theme.loss).fade(0.3).string(), "#424A55"], // Change colors as needed
      },
    ],
  };

  const options: any = {
    cutout: "55%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: false,
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
      >
        <div style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}>
          89%
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
