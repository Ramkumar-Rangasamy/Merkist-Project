import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


import './Employees.css';

const Employees = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mar', 'Apr', 'May','jun','july'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [30, 20, 40,30,40],
            backgroundColor: '#0f5132',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [40, 35, 50,20 ,50],
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
          },
          y: {
            beginAtZero: true,
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
        barPercentage: 1.0, // Adjust as needed
        categoryPercentage: 0.6, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };
  }, []);
 
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    const ctx = doughnutChartRef.current.getContext('2d');

    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [20, 70],
          backgroundColor: ['#14FF00', '#0f5132'],
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
                size: 8// Adjust label font size
              }
            }
          }
        }
      }
    });

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  
  
  return (
    <>
    <div className='Number-head  p-0'>
      <div className="card border border-dark m-2">
        <div className="height-20 m-0 p-0">
          <div className='row m-0 height-20 '>
            <div className='col-8   height-20'>
              <p className='title_employe border-bottom  border-dark'>Number Of Employee</p>
            </div>
            <div className='col-4 height-20'>
              <p className='number_740'>740</p>
            </div>
          </div>
        </div>
        <div className="row m-0">
            <div className="no-of-employee-graph-conatiner p-1">
                <canvas ref={chartRef} className='no-of-employee-graph'></canvas>
            </div>
        </div>
  
        <div className="row m-0">
          <div className="col-6  p-0 ">
            <div >
              <canvas ref={doughnutChartRef}  width="85" height="50" className='no-of-employees-doughnutchart'></canvas>
            </div>
          </div>
  
          <div className="col-6 ">
            <div className="no-of-employees-progress-container">
                <span className=' text-dark' style={{ fontSize: "8px" }}>Male</span>
                <div className="  progress" style={{ fontSize: "8px" , height: '4px'}}>
                <div className="progress-bar" role="progressbar" style={{ width: '65%', backgroundColor: 'darkgreen' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="10"></div>
                </div>
            </div>
             <div className="no-of-employees-progress-container">
                <span className='text-dark' style={{ fontSize: "8px" }}>Female</span>
                <div className="  progress" style={{ fontSize: "8px" , height: '4px'}}>
                <div className="progress-bar" role="progressbar" style={{ width: '65%', backgroundColor: 'darkgreen' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="10"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default Employees;