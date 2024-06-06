import React from 'react'
import "./allbrand.css"
//icons 

import { Card } from 'react-bootstrap';
import { SiCocacola } from "react-icons/si";
import { SiBuffer } from "react-icons/si";
import { SiHootsuite } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { FaSalesforce } from "react-icons/fa6";
import Others from './Others';
import Cocacolachat from './Cocacolachat';
import 'bootstrap/dist/css/bootstrap.min.css';

const Brands = () => {
  return (
    <>
    <div className='banner_container' >
        <div className='row' >
            <div className="col-sm-3 col-md-5 col-lg-3 ms-2 pe-1 ps-1 card-container">
                <div className="row m-0 ">
                 <p className='txt-brands-head'>Cocacola</p>
                </div>
                <div className="row m-0">
                    <div className="logo-container">
                    <SiCocacola className='logo_coca zoomed' />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-6 pe-1 ps-1">
                        <div className='cola_ads_container sub'>
                        <div className='amt_ads_container'>
                        <p className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>112.5</p>
                        <p className='amt_substands_cola'>K</p>
                        </div>
                        <small className='ads_spent_txt'>This Month</small>
                        <div className="container_progress_cola">
                        <div className="skill cola_ads"></div>
                        </div>
                        <small className='ads_percentage'>39%</small>
                        </div>
                    </div> 
                    <div className="col-6 pe-1 ps-1">
                        <div className='cola_ads_container'>
                        <div className='amt_ads_container text-dark'>
                        <p className='amt_ads_cola'><span className='icon_dollar_ads_cola pl-3'>$</span>18.6</p>
                        <p className='amt_substands_cola'>K</p>
                        </div>
                        <small className='ads_spent_txt pl-3'>That Week</small>
                        </div>
                    </div>
                    <div className="row m-0 ps-1 pt-3 pe-1">
                    <Cocacolachat /> 
                    </div>
                </div>
            </div>
            <div className="col-sm-2 col-md-3 col-lg-2 pe-1 ps-1  card-container">
                <div className="row m-0 ">
                  <p className='txt-brands-head'> Buffer</p>
                </div> 
                <div className="container-fluid p-0">
                  <div className="row m-0 mt-1  ">
                    <div className='col-4 p-0  other-logo-container  '>
                      <SiBuffer className='buffer-logos  ' />
                    </div>
                    <div className='col-8 p-0'>
                      <p className='buffer-name'>Buffer</p>
                    </div>
                  </div> 
                </div>
                <div className="row m-0">
                  <div className='amt_ads_container'>
                    <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>93.8</h1>
                    <h3 className='amt_substands_cola'>K</h3>
                  </div>
                  <small className='ads_spent_txt'>This Month</small>
                  <div class="container_progress_others p-0 ms-2">
                    <div class="skill cola_ads1 p-0"></div>
                  </div>
                  <small className='ads_percentage'>31%</small>
                </div>
                <div className="row m-0">
                <div className='amt_ads_container text-dark'>
                  <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>11.5</h4>
                  <h3 className='amt_substands_cola'>K</h3>
                </div>
                <small className='ads_spent_txt'>This Week</small>
                <div className='chart2 p-1 pt-4'>
                  <Others />
                </div>
                </div>
            </div>
            <div className="col-sm-2 col-md-3 col-lg-2 pe-1 ps-1 card-container">
            <div className="row m-0 ">
                  <p className='txt-brands-head'> Hootsuite</p>
                </div> 
                <div className="container-fluid p-0 mb-3">
                  <div className="row m-0 mt-1  ">
                    <div className='col-4 p-0  other-logo-container  '>
                      <SiHootsuite className='buffer-logos ' />
                    </div>
                    <div className='col-8 p-0'>
                      <p className='Hootsuite-name m-0'>Hootsuite</p>
                    </div>
                  </div> 
                </div>
                <div className="row m-0">
                  <div className='amt_ads_container'>
                    <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>101</h1>
                    <h3 className='amt_substands_cola'>K</h3>
                  </div>
                  <small className='ads_spent_txt'>This Month</small>
                  <div class="container_progress_others p-0 ms-2">
                    <div class="skill cola_ads2 p-0"></div>
                  </div>
                  <small className='ads_percentage'>35%</small>
                </div>
                <div className="row m-0">
                <div className='amt_ads_container text-dark'>
                  <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>12.4</h4>
                  <h3 className='amt_substands_cola'>K</h3>
                </div>
                <small className='ads_spent_txt'>This Week</small>
                <div className='chart2 p-1 pt-4'>
                  <Others />
                </div>
                </div>

            </div>
            <div className="col-sm-2 col-md-3 col-lg-2 pe-1 ps-1 card-container">
                <div className="row m-0 ">
                  <p className='txt-brands-head'> Zoho</p>
                </div> 
                <div className="row m-0 mt-2">
                    <div className="logo-container-other-brand">
                    <SiZoho className='logo_coca zoomed' />
                    </div>
                </div>
                <div className="row m-0">
                  <div className='amt_ads_container'>
                    <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>145</h1>
                    <h3 className='amt_substands_cola'>K</h3>
                  </div>
                  <small className='ads_spent_txt'>This Month</small>
                  <div class="container_progress_others p-0 ms-2">
                    <div class="skill cola_ads3 p-0"></div>
                  </div>
                  <small className='ads_percentage'>44%</small>
                </div>
                <div className="row m-0">
                <div className='amt_ads_container text-dark'>
                  <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>21.1</h4>
                  <h3 className='amt_substands_cola'>K</h3>
                </div>
                <small className='ads_spent_txt'>This Week</small>
                <div className='chart2 p-1 pt-4'>
                  <Others />
                </div>
                </div>
            </div>
            <div className="col-sm-2 col-md-3 col-lg-2  pe-1 ps-1 card-container">
                <div className="row m-0 ">
                  <p className='txt-brands-head'> Salesforce</p>
                </div> 
                <div className="row m-0 mt-2">
                    <div className="logo-container-other-brand">
                    <FaSalesforce className='logo_coca zoomed' />
                    </div>
                </div>
                <div className="row m-0">
                  <div className='amt_ads_container'>
                    <h1 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>133.4</h1>
                    <h3 className='amt_substands_cola'>K</h3>
                  </div>
                  <small className='ads_spent_txt'>This Month</small>
                  <div class="container_progress_others p-0 ms-2">
                    <div class="skill cola_ads4 p-0"></div>
                  </div>
                  <small className='ads_percentage'>62%</small>
                </div>
                <div className="row m-0">
                <div className='amt_ads_container text-dark'>
                  <h4 className='amt_ads_cola'><span className='icon_dollar_ads_cola'>$</span>24.2</h4>
                  <h3 className='amt_substands_cola'>K</h3>
                </div>
                <small className='ads_spent_txt'>This Week</small>
                <div className='chart2 p-1 pt-4'>
                  <Others />
                </div>
            </div>
          </div>
        </div>
       </div>      
      </>
  )
}

export default Brands