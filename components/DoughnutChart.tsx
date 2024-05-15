"use client";

import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Jun", "Jul", "Aug"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "70%",
        animation: { animateScale: true },
        plugins: { legend: { display: false } },
      }}
    />
  );
};

export default DoughnutChart;
