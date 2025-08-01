// SalesVolumeChart.js

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './SalesVolumeChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

const data = {
  labels,
  datasets: [
    {
      label: '2024',
      data: [12000, 11800, 12400, 11600, 18000, 16000, 14000, 4000],
      borderColor: '#0000FF',
      backgroundColor: '#0000FF',
      pointBackgroundColor: '#0000FF',
      pointBorderColor: '#0000FF',
      pointStyle: 'rect',
      tension: 0.4, // Smooth curves
    },
    {
      label: '2025',
      data: [16000, 18000, 14000, 12800, 20000, 18000, 16000, 14000],
      borderColor: '#00FF00',
      backgroundColor: '#00FF00',
      pointBackgroundColor: '#00FF00',
      pointBorderColor: '#00FF00',
      pointStyle: 'circle',
      tension: 0.4, // Smooth curves
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#FFFFFF',
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Sales Volume',
      color: '#FFFFFF',
      font: {
        size: 24,
        weight: 'bold',
      },
      padding: {
        bottom: 20,
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#FFFFFF',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    y: {
      min: 0,
      max: 24000,
      ticks: {
        stepSize: 4000,
        color: '#FFFFFF',
        callback: function (value:any) {
          return (value / 1000) + 'k';
        },
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  elements: {
    point: {
      radius: 5,
      borderWidth: 2,
    },
    line: {
      borderWidth: 3,
    },
  },
};

const SalesVolumeChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chartWrapper}>
        <Line options={options} data={data} />
      </div>
      <button className={styles.button}>View interactive sales volume</button>
    </div>
  );
};

export default SalesVolumeChart;