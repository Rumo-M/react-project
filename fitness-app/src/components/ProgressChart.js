// ProgressChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: 'Progress Over Time',
        data: data.map((entry) => entry.value),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ProgressChart;