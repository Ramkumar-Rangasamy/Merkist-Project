import React from 'react'
import './Campaigns.css'
import { LuCalculator } from "react-icons/lu";
import { FaHubspot, FaTrello, FaSlack, FaFacebookSquare } from "react-icons/fa";
import { SiClickup } from "react-icons/si";
import { BiUpArrowAlt } from "react-icons/bi";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [40, 10, 50],
      backgroundColor: ["darkgreen", "lightgreen", "grey"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const data1 = {
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ["darkgreen", "lightgreen", "grey"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const data2 = {
  datasets: [
    {
      data: [0, 0, 100],
      backgroundColor: ["darkgreen", "lightgreen", "grey"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const Campaigns = () => {
  return (
    <div className='campaign-container'>
      <div className="row">
        <div className="col-8 p-0 campaign-column-container-1"  style={{ width:"310px"}}>
            <div className="row ms-0 me-2 campaign-column-container-row-1">
              <div className="row m-0 h-25">
                <p className='txt-campaigns-head m-0'>Campaigns</p>
              </div>
              <div className="row m-0 p-0 ">
                <div className="col-5 p-0"> 
                  <div className='last-3-months-container'>
                    <LuCalculator className='last-3-months-icon'/>
                    <p className='last-3-moths-txt'> Last 3 months</p>
                  </div>
                  <div className="campaigns-card1-icon-container">
                    <FaHubspot className='campaigns-card1-icon-item' />
                    <FaTrello className='campaigns-card1-icon-item'/>
                    <FaSlack className='campaigns-card1-icon-item'/>
                    <SiClickup className='campaigns-card1-icon-item'/>
                    <FaFacebookSquare className='campaigns-card1-icon-item'/>
                  </div>
                </div>
                <div className="col-3 p-0">
                  <div className="campaigns-card1-numbers-container">
                    <p className='campaign-card1-txt-header mb-0'>Email sent</p>
                    <p className='campaign-card1-number-header m-0'>12,620</p>
                    <div className="campaigns-card1-subtext--header-conatainer">
                      <BiUpArrowAlt className='campaigns-card1-subtext--header-icon'/>
                      <p className='m-0 campaigns-card1-subtext--header-txt'>5%</p></div>
                  </div>                  
                </div>
                <div className="col-4 p-0">
                  <div className="campaigns-card1-numbers-container">
                    <p className='campaign-card1-txt-header-1 mb-0'>Transcation revenue</p>
                    <div className="campaign-card1-number-header-container">
                      <p className='campaign-card1-number-header m-0'>21.380,80</p>
                      <p className='campaign-card1-dollar-header m-0'>$</p>
                    </div>
                    <div className="campaigns-card1-subtext--header-conatainer">
                      <BiUpArrowAlt className='campaigns-card1-subtext--header-icon'/>
                      <p className='m-0 campaigns-card1-subtext--header-txt'>5%</p></div>
                  </div> 
                </div>
              </div>

            </div>
            <div className="row ms-0 me-2 campaign-column1-container-row-2 ">
                <div className="container-fluid ">
                  <div className="row h-50 mt-1">
                    <div className="col-4" >
                      <p className='m-0 campaign-column1-row2-txt-header '>Google Ads</p>
                      <div className='campaign-column1-row2-txt-number-container'>
                        <p className='campaign-column1-row2-txt-number-container-dollar m-0'>$</p>
                        <p className='campaign-column1-row2-txt-number-container-number m-0'>13.5</p>
                        <p className='campaign-column1-row2-txt-number-container-k m-0'>k</p>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-number m-0'>Spend This Month</p>
                      <div className="campaigns-progress-container">
                          <div className="  progress" style={{ fontSize: "8px" , height: '3px'}}>
                          <div className="progress-bar" role="progressbar" style={{ width: '65%', backgroundColor: 'darkgreen' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="10"></div>
                          </div>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-progress'>63%</p>
                    </div>
                    <div className="col-4">
                    <p className='m-0 campaign-column1-row2-txt-header '>Facebook</p>
                      <div className='campaign-column1-row2-txt-number-container'>
                        <p className='campaign-column1-row2-txt-number-container-dollar m-0'>$</p>
                        <p className='campaign-column1-row2-txt-number-container-number m-0'>4.5</p>
                        <p className='campaign-column1-row2-txt-number-container-k m-0'>k</p>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-number m-0'>Spend This Month</p>
                      <div className="campaigns-progress-container">
                          <div className="  progress" style={{ fontSize: "8px" , height: '3px'}}>
                          <div className="progress-bar" role="progressbar" style={{ width: '46%', backgroundColor: 'darkgreen' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="10"></div>
                          </div>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-progress'>46%</p>
                    </div>
                    <div className="col-4">
                    <p className='m-0 campaign-column1-row2-txt-header '>Instagram</p>
                      <div className='campaign-column1-row2-txt-number-container'>
                        <p className='campaign-column1-row2-txt-number-container-dollar m-0'>$</p>
                        <p className='campaign-column1-row2-txt-number-container-number m-0'>1.7</p>
                        <p className='campaign-column1-row2-txt-number-container-k m-0'>k</p>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-number m-0'>Spend This Month</p>
                      <div className="campaigns-progress-container">
                          <div className="  progress" style={{ fontSize: "8px" , height: '3px'}}>
                          <div className="progress-bar" role="progressbar" style={{ width: '21%', backgroundColor: 'darkgreen' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="10"></div>
                          </div>
                      </div>
                      <p className='campaign-column1-row2-txt-subtext-progress'>21%</p>
                    </div>
                  </div>
                  <div className="row h-48">
                    <div className="col-4">
                      <p className='m-0 campaigns-column1-row2-302-txt'>302</p>
                      <p className='m-0 campaigns-column1-row2-conversions-txt'>Conversions</p>
                    </div>
                    <div className="col-4">
                      <p className='m-0 campaigns-column1-row2-302-txt'>302</p>
                      <p className='m-0 campaigns-column1-row2-conversions-txt'>Conversions</p>
                    </div>
                    <div className="col-4">
                      <p className='m-0 campaigns-column1-row2-302-txt'>302</p>
                      <p className='m-0 campaigns-column1-row2-conversions-txt'>Conversions</p>
                    </div>

                  </div>
                </div>
            </div>
        </div>
        <div className="col-4 campaigns-column-container-2">
          <div className="campaigns-column-container-2-graph-content">
            <p className='campaigns-card3-card-header m-0'>Email Recieved</p>
            <div className="row">
              <div className="col-3 ps-0 pe-0">
                <div className='campaigns-card3-card-percentage-container'>
                  <BiUpArrowAlt className='campaigns-card3-card-uparrow-icon'/>
                  <p className='m-0 campaigns-card3-card-percentage-txt'>36%</p>
                </div>
              </div>
              <div className="col-9 ps-0">
                <div className="campaigns-card3-column2-container">
                  <div className='campaigns-card3-column2-graph mr-2'>
                  {/* First Doughnut */}
                  <Doughnut
                    data={data}
                    width={40} // Set your desired width here
                    height={40} // 
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                        },
                      },
                      rotation: -90,
                      circumference: 180,
                      cutout: "60%",
                      maintainAspectRatio: true,
                      responsive: true,
                    }}
                  />
                  </div>
                </div>
                  <div className="container-fluid campaigns-card3-column2-graph-numbers-conatiner">
                    <p className='m-0 campaigns-card3-column2-graph-numbers'>19,574</p>
                    <p className='m-0 campaigns-card3-column2-graph-txt'>vs previous 30 days</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="campaigns-column-container-2-graph-content">
            <p className='campaigns-card3-card-header m-0'>Email Sent</p>
            <div className="row">
              <div className="col-3 ps-0 pe-0">
                <div className='campaigns-card3-card-percentage-container'>
                  <BiUpArrowAlt className='campaigns-card3-card-uparrow-icon'/>
                  <p className='m-0 campaigns-card3-card-percentage-txt'>56%</p>
                </div>
              </div>
              <div className="col-9 ps-0">
                <div className="campaigns-card3-column2-container">
                  <div className='campaigns-card3-column2-graph mr-2'>
                  {/* First Doughnut */}
                  <Doughnut
                    data={data1}
                    width={40} // Set your desired width here
                    height={40} // Set your desired height here
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                        },
                      },
                      rotation: -90,
                      circumference: 180,
                      cutout: "60%",
                      maintainAspectRatio: true,
                      responsive: true,
                    }}
                  />
                  </div>
                </div>
                  <div className="container-fluid campaigns-card3-column2-graph-numbers-conatiner">
                    <p className='m-0 campaigns-card3-column2-graph-numbers'>26,112</p>
                    <p className='m-0 campaigns-card3-column2-graph-txt'>vs previous 30 days</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="campaigns-column-container-2-graph-content">
            <p className='campaigns-card3-card-header m-0'>Email Blocked</p>
            <div className="row">
              <div className="col-3 ps-0 pe-0">
                <div className='campaigns-card3-card-percentage-container'>
                  <BiUpArrowAlt className='campaigns-card3-card-uparrow-icon'/>
                  <p className='m-0 campaigns-card3-card-percentage-txt'>0%</p>
                </div>
              </div>
              <div className="col-9 ps-0">
                <div className="campaigns-card3-column2-container">
                  <div className='campaigns-card3-column2-graph'>
                  {/* First Doughnut */}
                  <Doughnut
                    data={data2}
                    width={50} // Set your desired width here
                    height={50} // Set your desired height here
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                        },
                        tooltip: {
                          enabled: false,
                        },
                      },
                      rotation: -90,
                      circumference:180,
                      cutout: "60%",
                      maintainAspectRatio: true,
                      responsive: true,
                    }}
                  />
                  </div>
                </div>
                  <div className="container-fluid campaigns-card3-column2-graph-numbers-conatiner">
                    <p className='m-0 campaigns-card3-column2-graph-numbers'>0</p>
                    <p className='m-0 campaigns-card3-column2-graph-txt'>vs previous 30 days</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaigns