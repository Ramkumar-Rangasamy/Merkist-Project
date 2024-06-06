import React, { useEffect, useRef }  from "react";
import { FaArrowUp } from "react-icons/fa";
import Chart from "chart.js/auto"; // Use "auto" to include all Chart.js components
import "./leads.css"

const Leads = () => {
  
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const chartConfig = {
      type: "doughnut",
      data: {
        labels: ["Facebook", "Twitter", "Instagram"],
        datasets: [
          {
            data: [32, 34, 34],
            backgroundColor: ["#D3D3D3", "#14FF00", "#006400"],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth:10, // Adjust legend box width
              usePointStyle: true, // Use circular point style for legend items
              font: {
                size:9// Adjust label font size
              },
              
            },
            
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      // Destroy existing chart instance if it exists
      if (myChart) {
        myChart.destroy();
      }

      // Create new chart instance
      myChart = new Chart(chartRef.current, chartConfig);
    }

    // Cleanup function
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  const data = [
    {
      title: "Leads",
      count: "457",
      percentage: "5%",
    },
    {
      title: "Users",
      count: "2,215",
      percentage: "9.2%",
    },
  ];

  const data1 = [
    {
      title: "User to Leads",
      percentage: "1.47",
    },
    {
      title: "Leads to MQLs",
      percentage: "49.45",
    },
  ];
  return (
    <>
      <div className="leads-head">
        <p className='leads-text'>Leads</p>
        <div id="scoreContainer">
          {data?.map((item) => {
          return (
            <div key={item?.id}>
                <div className="title-leads">{item?.title}</div>
                <div className="individualScore">
                  <div className="countScore">{item?.count}</div>
                  <div className="scoreData">
                    <FaArrowUp className="pt-1"/>
                    <div>{item?.percentage}</div>
                  </div>
                  <div className="description"> vs previous 30 days </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="percentageContainer">
          {data1?.map((items) => {
            return (
              <div className="percentageWrapper" key={items?.id}>
                <div className="title-percentage">{items?.title}</div>
                <div className="percentageScore">
                  <div>{items?.percentage}</div>
                  <sup className="perecentageIcon">%</sup>
                </div>
              </div>
            );
          })}
        </div>

        
         

      </div>

      <div >
        <p id="chartContainer12">Socials Events</p>
        <div id="chartContainer">
          <canvas ref={chartRef} width={50} height={25} />
        </div>
      </div>
    </>
  );
};

export default Leads;