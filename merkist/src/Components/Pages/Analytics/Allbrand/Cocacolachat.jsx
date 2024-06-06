import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './allbrand.css';



const Cocacolachat = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['sun', 'mon', 'thu','wed','thu','sat','sat'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [3, 2, 4,3,4,5,3],
            backgroundColor: '#0f5132',
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
            ticks: {
              font: {
                size: 8, // adjust the font size here
              },
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
        barPercentage: 0.7, // Adjust as needed
        categoryPercentage: 0.7, // Adjust as needed
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
      marginBottom:'5px' 
      
    }} className='cocacola-chart ml-1 p-0'>
      <p className='text-dark week'>This week</p>
      <div>
        
        <canvas ref={chartRef} className='coca-graph-canva'></canvas>
      </div>
    </div>
  );
};

export default Cocacolachat;