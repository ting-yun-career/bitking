"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Color from 'color';

const CandleStickLineChart = () => {
  const chartRef: any = useRef(null);
  const theme = process.env.theme as any;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(0, Color(theme.profit).fade(0).string());
    gradient.addColorStop(1, Color(theme.bg).fade(0.1).string());

    const chartData = {
      labels: [
        "14.00",
        "15.00",
        "16.00",
        "17.00",
        "18.00",
        "19.00",
        "20.00",
        "21.00",
        "22.00",
        "23.00",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [38, 25, 49, 38, 40, 66, 65, 48, 85, 58],
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.profit,
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "white",
        },
      ],
    };

    const theChart = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#212B39",
            titleColor: "#3EBF81",
            padding: 10,
            bodyColor: "#FFF",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            ticks: {
              color: "#D2D9E4",
            },
            grid: {
              color: "#424A55",
            },
          },
        },
      },
    });

    return () => { theChart.destroy() }
  }, []);

  return <canvas ref={chartRef} />;
};

export default CandleStickLineChart;
