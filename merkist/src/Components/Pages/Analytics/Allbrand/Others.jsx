import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Others = () => {
 
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#0f5132'); 
    gradient.addColorStop(1, '#FFFFFF');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['','','','','','',''],
        datasets: [
          {
            label: 'Dataset 1',
            data: [5, 10,8,9.5,4.5,3,8.5],
            backgroundColor:gradient,
            borderWidth: 1,

          
          },
          
          
          // Add more datasets as needed
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            display: false,
            grid: {
              display: false,
            },
          },
        },
        indexAxis: 'x',
        plugins: {
          legend: {
            display: false,
          },
        },
        barPercentage: 0.9, // Adjust as needed
        categoryPercentage: 0.9, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, []);

  return (
<div  style={{
      width: '100%', 
      height: '80%', 
      border: 'none', 
      marginBottom: '5px' 
      
    }} className='cocacola-chart ml-1 p-0'>
      <div>
        
        <canvas ref={chartRef} height="90" ></canvas>
      </div>
    </div>
 
  );
};

export default Others;