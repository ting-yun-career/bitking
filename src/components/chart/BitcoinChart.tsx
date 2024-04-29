"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BitcoinChart = () => {
  const chartRef: any = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(12, 175, 96, 1)");
    gradient.addColorStop(1, "rgba(115, 115, 115, 0.00)");

    const chartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
      datasets: [
        {
          label: "My Dataset",
          data: [30, 20, 31, 25, 45, 28, 31, 27, 32],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#0CAF60",
          pointRadius: 0,
          tension: 0.4,
          borderWidth: 3,
        },
      ],
    };

    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            bottom: -8,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
          x: {
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default BitcoinChart;
