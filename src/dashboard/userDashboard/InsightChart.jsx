import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const InsightChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar', // You can change this to 'bar', 'pie', 'doughnut', etc.
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Monthly Profit',
            data: [400, 300, 200, 278, 189, 239, 349, 400],
            // borderColor: '#42a5f5',
            borderColor: '#000',
            color: "#fff",
            backgroundColor: 'rgb(44, 62, 114)',
            fill: true,
            barThickness: 30, // Set the bar thickness
            maxBarThickness: 50, // Limit the maximum width of the bars
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Disable fixed aspect ratio to fit the parent div
        plugins: {
          legend: {
            display: true,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Profit',
            },
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      Chart.getChart(chartRef.current)?.destroy();
    };
  }, []);

  return (
    <div style={{width: '800px', height: '100%'}}>
        <canvas ref={chartRef} style={{width: '100%', height: '100%'}}></canvas>;
    </div>
  )
};

export default InsightChart;
