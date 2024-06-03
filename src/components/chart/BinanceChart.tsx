"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BinanceChart = () => {
  const chartRef: any = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 65);
    gradient.addColorStop(0, "rgba(12, 200, 150, 0.5)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    const chartData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "rob",
        "eia",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [0, 10, 15, 10, 15, 10, 12, 10, 16, 20, 15, 12, 17, 6],
          fill: true,
          backgroundColor: gradient,
          borderColor: "rgba(12, 200, 150, 1)",
          pointRadius: 0,
          tension: 0.4,
          borderWidth: 1,
        },
      ],
    };

    const theChart = new Chart(ctx, {
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

    return () => { theChart.destroy() }
  }, []);

  return <canvas ref={chartRef} />;
};

export default BinanceChart;
