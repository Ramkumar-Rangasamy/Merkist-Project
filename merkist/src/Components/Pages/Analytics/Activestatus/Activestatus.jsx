import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './activestatus.css';
import { Card} from 'react-bootstrap';

const Activestatus = () => {
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    const ctx = doughnutChartRef.current.getContext('2d');

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['In Progress', 'Completed', 'Not Started'],
        datasets: [{
          data: [10, 20, 70],
          backgroundColor: ['lightgreen', 'grey', 'darkgreen'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              boxWidth: 12, // Adjust legend box width
              usePointStyle: true, // Use circular point style for legend items
              font: {
                size:8// Adjust label font size
              },
            },
          },
        },
      }
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Day', 'Week', 'Month'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [30, 20, 10,],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [15, 15, 15],
            backgroundColor: '#0f5132', // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [20, 35, 37],
            backgroundColor: '#0f5132', // Change color as needed
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
                  size:8, // adjust the font size here
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
        barPercentage: 0.9, // Adjust as needed
        categoryPercentage: 0.9, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, []);

  return (
    <>  
      <div className='status_head'>
        <div className='row'>
            <div className='col-lg-2'>
              <Card style={{ width: "140px", height: "140px" ,border:'1px solid black',borderRadius:"5px",marginTop:"5px"}}>
                <Card.Header className='text-dark cardheader'>Active Task Status</Card.Header>
                <div className='canvas_part'>
                  <canvas ref={doughnutChartRef} width="60" height="80"></canvas>
                </div>
              </Card>
            </div>
            <div className='col-lg-2 activestatus-secound'>
              <Card style={{ width: "140px", border:'1px solid black',height: "140px",borderRadius:"5px",marginTop:"5px",marginLeft:"95px" }}>
                <div>
                  <canvas ref={chartRef} width="150" height="130"></canvas>
                </div>
              </Card>
            </div>
        </div>
      </div>
    </>
  );
};

export default Activestatus;