import React, { useEffect, useRef } from 'react';
import './Social.css'
//icon imports
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";
//Analytic-card
import Chart from 'chart.js/auto';
//Analytics   green
import { FaCircle } from "react-icons/fa";
//sub card 3 icon import
import { RiTriangleFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";


const Social = () => {
  const chartRef = useRef(null);
   
  useEffect(() => {

    //Analytic charbar
    const ctx = chartRef.current.getContext('2d');

    const gradient = ctx.createLinearGradient(1, 1, 1, 550);
    gradient.addColorStop(0, '#184D32'); 
    gradient.addColorStop(1, '#FFFFFF');

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        
        labels: ['Day', 'Week', 'Month','Year'],
        datasets: [
          { 
            label: 'Dataset 1',
            data: [3, 2, 4,4],
            backgroundColor: gradient,
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [4, 3.5, 2,2 ],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [3.5, 6, 5, 5],
            backgroundColor: gradient, // Change color as needed
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [6, 7, 6, 6],
            backgroundColor: gradient, // Change color as needed
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
        barPercentage: 0.9, // Adjust as needed
        categoryPercentage: 0.7, // Adjust as needed
      },
    });

    return () => {
      myBarChart.destroy();
    };

  }, []);

  return (
    <div className="card1-social-conatiner"  >
    <div className="row m-0 p-0 ">
      <div className="col-8 ps-1 p-0">
        <div className="row ms-1 card1-socail-row-1" style={{ height:'125px' }} >
          <div className='social-head p-1'>
            <div className="row m-0 h-25">
              <p className='txt-social-head'>Social Media Followers</p>
            </div>
            <div className="row m-0">
              <div className="col-3 p-0">
                <div className="row m-0 social-subcard-row"><p className='social-text-number m-0 p-0'>26.5K</p></div>
                <div className="row m-0"><p className='social-text-company-name m-0 p-0'>Twitter</p></div>
                <div className="row m-0">
                  <div className="col-6 p-0"><RiTwitterXLine/></div>
                  <div className="col-6 p-0">
                    <div className="container-icon-up"><RiArrowUpSFill className='icon-arrow-social'/></div>
                    </div>
                </div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>Insert you desired text</p></div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>text here</p></div>
              </div>
              <div className="col-3 p-0">
              <div className="row m-0 social-subcard-row"><p className='social-text-number m-0 p-0'>21.2K</p></div>
                <div className="row m-0"><p className='social-text-company-name m-0 p-0'>Facebook</p></div>
                <div className="row m-0">
                  <div className="col-6 p-0"><FaFacebookSquare/></div>
                  <div className="col-6 p-0">
                    <div className="container-icon-up"><RiArrowUpSFill className='icon-arrow-social'/></div>
                    </div>
                </div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>Insert you desired text</p></div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>text here</p></div>
              </div>
              <div className="col-3 p-0">
              <div className="row m-0 social-subcard-row"><p className='social-text-number m-0 p-0'>14.7K</p></div>
                <div className="row m-0"><p className='social-text-company-name m-0 p-0'>LinkedIn</p></div>
                <div className="row m-0">
                  <div className="col-6 p-0"><FaLinkedin/></div>
                  <div className="col-6 p-0">
                    <div className="container-icon-up"><RiArrowUpSFill className='icon-arrow-social'/></div>
                    </div>
                </div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>Insert you desired text</p></div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>text here</p></div>
              </div>
              <div className="col-3 p-0">
              <div className="row m-0 social-subcard-row"><p className='social-text-number m-0 p-0'>74.4K</p></div>
                <div className="row m-0"><p className='social-text-company-name m-0 p-0'>Instagram</p></div>
                <div className="row m-0">
                  <div className="col-6 p-0"><TiSocialInstagram/></div>
                  <div className="col-6 p-0">
                    <div className="container-icon-up"><RiArrowUpSFill className='icon-arrow-social'/></div>
                    </div>
                </div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>Insert you desired text</p></div>
                <div className="row m-0"><p className='social-text-subtext m-0 p-0'>text here</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card2-social-container "  style={{ height:'60%' }} >
          <div className='txt-analytic-head-container ps-1 pe-1 pt-1'>
          <p className='txt-analytic-head m-0'>Analytic</p>
          </div>
          <div className='chart-row-social' >
            <canvas ref={chartRef}></canvas>
          </div>
          <div className=" row company-analytic-cards">
            <div className="col-3 company-analytic-cards-col-container  p-0">
             <div className='icon_circle m-0'>
                <FaCircle />
                <span className='company-analytic-cards-col-container-name' >Twitter</span>
              </div>
            </div>
            <div className="col-3 company-analytic-cards-col-container  p-0">
             <div className='icon_circle m-0'>
                <FaCircle />
                <span className='company-analytic-cards-col-container-name' >Facebook</span>
              </div>
            </div>
            <div className="col-3 company-analytic-cards-col-container  p-0">
             <div className='icon_circle m-0'>
                <FaCircle />
                <span className='company-analytic-cards-col-container-name' >LinkedIn</span>
              </div>
            </div>
            <div className="col-3 company-analytic-cards-col-container  p-0">
             <div className='icon_circle m-0'>
                <FaCircle />
                <span className='company-analytic-cards-col-container-name' >Instagram</span>
              </div>
            </div>

          </div>
          
        </div>
      </div>
      <div className="col-4 card1-social-col-2  p-0 " >
         <div>
         <div className="row card1-social-spefic-card-container m-0">
            <div className="txt-social-specific-head-container  pe-1 ps-1">
              <p className='txt-social-head m-0'>Facebook</p>
            </div>
           <div className='p-0'>
              <div className="row m-0">
                <div className="col-6 p-0">
                <div class="flex-box fontsize-15">$ 10k<p className='fontsize-8'>spend</p> </div>
                </div>
                <div className="col-6 p-0">
                <div class="flex-box fontsize-15">567<p className='text-center fontsize-8 '>Clicks</p></div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-6 p-0 ">
                <div class="flex-box fontsize-15">$ 15k<p className='fontsize-8'>CPC</p></div>
                </div>
                <div className="col-6 p-0 mt-3  ">
                <div class="flex-boxone"> <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />75</div>
                </div>
              </div>
           </div>

          </div>
          <div className="row card1-social-spefic-card-container m-0 mt-2">
            <div className="txt-social-specific-head-container  pe-1 ps-1">
              <p className='txt-social-head m-0'>Instagram</p>
            </div>
           <div className='p-0'>
              <div className="row m-0">
                <div className="col-6 p-0">
                <div class="flex-box fontsize-15">$ 12k<p className='fontsize-8'>spend</p> </div>
                </div>
                <div className="col-6 p-0">
                <div class="flex-box fontsize-15">713<p className='text-center fontsize-8 '>Clicks</p></div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-6 p-0 ">
                <div class="flex-box fontsize-15">$ 13k<p className='fontsize-8'>CPC</p></div>
                </div>
                <div className="col-6 p-0 mt-3">
                <div class="flex-boxone"> <RiTriangleFill id="tri-icon" /><RxDotFilled id="tri-icon" />69</div>
                </div>
              </div>
           </div>
          </div>
          <div className="row card1-social-spefic-card-container m-0 mt-2">
            <div className="txt-social-specific-head-container  pe-1 ps-1">
              <p className='txt-social-head m-0'>Twitter</p>
            </div>
           <div className='p-0'>
              <div className="row m-0">
                <div className="col-6 p-0">
                <div class="flex-box-Twitter"> </div>
                </div>
                <div className="col-6 p-0">
                <div class="flex-box-Twitter"> </div>
                </div>
              </div>
           </div>
          </div>
         </div>
      </div>
    </div>
  </div>
  )
}

export default Social