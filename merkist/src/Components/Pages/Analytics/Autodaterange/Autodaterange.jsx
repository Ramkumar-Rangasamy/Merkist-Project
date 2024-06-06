import React from 'react';
import './autodaterange.css';
import { LuCalculator } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";


const Autodaterange = () => {    
  return (
    <>
        <div className='row'>
            <div className='col-md-3 col-3'>
                <div className='options_container9'>
                    <p className='txt_autodate9'>Auto date range</p>
                    <div className='tools_autodate9'>
                      <LuCalculator className='icon_calc9'/>
                      <p className='txt_autodate_header9'>Last 3 Months</p>
                    </div>                    
                </div>

                <div className='title9'>Ad Spend</div>
                <div className="countScore9"><sup><BsCurrencyDollar className='icon_dollar_ads9' /></sup>65.37</div>
                <h3 className="scoreData9">
                    <FaArrowDown className='icon_arrow9' />
                    <div>170%</div>
                </h3>
                <div className="description9"> vs previous 30 days </div>
                      
            </div>  

            <div className='col-md-3 col-3'>
                <div className="service_dropdown9">
                    <p className='txt_services9'>Services</p>
                    <select className='drop_down_menu_services9'>
                        <option className='options_services9' value="" selected disabled hidden>All</option>
                    </select>
                </div>

                <div className='title9'>Cost Per Thousand(CPT)</div>
                <div className="countScore9"><sup><BsCurrencyDollar className='icon_dollar_ads9' /></sup>3.94</div>
                <h3 className="scoreData9">
                    <FaArrowDown className='icon_arrow9' />
                    <div>$0.45</div>
                </h3>
                <div className="description9"> vs previous 30 days </div>

            </div> 

            <div className='col-md-3 col-3'>

                <div className="service_dropdown9">
                    <p className='txt_services9'>Post</p>
                    <select className='drop_down_menu_services9'>
                        <option className='options_services9' value="" selected disabled hidden>All</option>
                    </select>
                </div>

                <div className='title9'>Cost Per Click(CPC)</div>
                <div className="countScore9"><sup><BsCurrencyDollar className='icon_dollar_ads9' /></sup>0.15</div>
                <h3 className="scoreData9">
                    <FaArrowDown className='icon_arrow9' />
                    <div>$0.02</div>
                </h3>
                <div className="description9"> vs previous 30 days </div>
                
            </div>

            <div className='col-md-3 col-3 '>
                <div className='throgh-rate'>
                    <div className='title9'>Click-Through Rate(CTR)</div>
                    <div className="countScore9">2.89<FaPercentage className='icon_dollar_ads9' /></div>
                    <h3 className="scoreData9">
                        <FaArrowDown className='icon_arrow9' />
                        <div>7%</div>
                    </h3>
                    <div className="description9"> vs previous 30 days </div>
                </div>
            </div>

        </div> 
    </>
  )
}

export default Autodaterange