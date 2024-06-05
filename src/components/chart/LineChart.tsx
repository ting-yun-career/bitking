"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Color from 'color';

const LineChart = () => {
  const chartRef: any = useRef(null);
  const theme = process.env.theme as any;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(0, Color(theme.profit).fade(0.5));
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
      ],
      datasets: [
        {
          label: "BTC",
          data: [3, 22, 10, 38, 40, 66, 65, 48, 85, 58, 37, 43],
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.profit,
          borderWidth: 2,
          pointRadius: 3,
          tension: 0.4,
          pointBackgroundColor: "white",
        },
        {
          label: "ETH",
          data: [38, 18, 20, 30, 78, 55, 75, 55, 12, 18, 20, 13],
          fill: true,
          borderColor: theme.profit,
          borderWidth: 2,
          pointRadius: 3,
          tension: 0.4,
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
            grid: {
              color: "#333"
            },
            ticks: {
              color: "#D2D9E4",
              callback: function (value, index, values) {
                return value + "k";
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#D2D9E4",
            },
          },
        },
      },
    });

    return () => { theChart.destroy() }
  }, []);

  return <canvas id="line-chart" ref={chartRef} />;
};

export default LineChart;
