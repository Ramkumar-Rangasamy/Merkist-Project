import React from 'react'

//style.css
import './sidebar.css'

// imported logo images
import logo from './Asset/logo.png';

//import fortawesome SOLID icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser} from '@fortawesome/free-solid-svg-icons';

//import react icons
import { IoTvOutline } from "react-icons/io5";
import { MdCellTower } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FaPersonRunning } from "react-icons/fa6";
import { MdSpatialTracking } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { MdOutlineJoinInner } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";

//react router
import { Link } from 'react-router-dom';
const Sidebar = () => {
    
  return (
    <>
     
      <div className='sidebar'>
        <div className='logo_brand'> 
          <img src={logo} width='150' alt='BrandLogo'/>
        </div>

        <div className="dashboard ">
          <p className='dashboard-text'>Dashboard</p>
        </div>

        <div className='side'>

          <a className='list-group-item  py-2'>
            <i className=' fs-5 me-3'><IoTvOutline/></i>
            <span className=''>Advertise</span>
          </a> 

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3 '><MdCellTower/></i>
            <span>Radar</span>
          </a>

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3'><FaPersonRays/></i>
            <span >Engage</span>
          </a>

          <Link to="/analytics" className='list-group-item py-2'>
            <i className='fs-5 me-3'><SiGoogleanalytics/></i>
            <span>Analystics</span>
          </Link>

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3'><FaPersonRunning/></i>
            <span>Activities</span>
          </a>

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3'><MdSpatialTracking /></i>
            <span>Tracking</span>
          </a>

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3'><MdInsights/></i>
            <span>Insights</span>
          </a>

          <a className='list-group-item py-2'>
            <i className='fs-5 me-3'><MdOutlineJoinInner /></i>
            <span>Integration</span>
          </a>

          <a className='list-group-item py-2'>
            <i className=' fs-5 me-3'> <IoSettings/></i>
            <span>Settings</span>
          </a>

          <a className='list-group-item py-2'>
              <i className=' fs-5 me-3'> <BsPersonCheck/></i>
              <span>Support</span>
          </a>

          <Link to="/orangic-post" className='list-group-item py-2'>
            <i className=' fs-5 me-3'><RiFileEditFill/></i>
            <span>Organic post</span>
          </Link>

        </div>

        <div className='list-group-item py-4 team-chat'>
          <i className='fs-5  me-3'> <FontAwesomeIcon icon={faChalkboardUser}/></i>
          <span>Team chat</span>
        </div> 
      </div>
    </>
  )
}

export default Sidebar