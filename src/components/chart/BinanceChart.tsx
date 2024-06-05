"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Color from 'color';

const BinanceChart = () => {
  const chartRef: any = useRef(null);
  const theme = process.env.theme as any;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 65);
    gradient.addColorStop(0, Color(theme.loss).fade(0.5));
    gradient.addColorStop(1, Color(theme.bg).fade(1));

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
          data: [100, 90, 85, 70, 55, 10, 12, 10, 16, 20, 15, 12, 17, 6],
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.loss,
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
