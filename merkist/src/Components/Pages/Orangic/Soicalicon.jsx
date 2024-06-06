import React, { useState } from 'react';

//style.css
import './socialicon.css'
//import uploadpost components
import Uploadpost from './Uploadpost/Uploadpost';
import Firstupload from './Uploadpost/Firstupload';

//import react icons 
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import {FaLinkedin } from 'react-icons/fa';
import { TiSocialInstagram } from "react-icons/ti";
import { AiOutlinePlusCircle } from 'react-icons/ai';

//import react  back button icons 
import { IoArrowBackCircleOutline } from "react-icons/io5";


const Soicalicon = () => {

  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (platform) => {
    setSelectedPlatform(platform);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedPlatform(null);
    setIsPopupOpen(false);
  };

  const renderPopupContent = () => {
    switch (selectedPlatform) {
      case 'twitter':
        return <Uploadpost platform="Twitter" />;
      case 'facebook':
        return <Firstupload platform="Facebook" />;
      case 'linkedin':
        return <Uploadpost platform="LinkedIn" />;
      case 'instagram':
        return <Firstupload platform="Instagram" />;
      case 'plus':
        // Add content for the plus icon if needed
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="soicalicon-content">
        <div className="container-gp-button">
          <div className="social-icons-all">
            <button className="social-icon-button" onClick={() => handleButtonClick('twitter')}>
              <FaXTwitter className="inside-icon" size="3em"/>
            </button>
            <button className="social-icon-button" onClick={() => handleButtonClick('facebook')}>
              <FaFacebookSquare className="inside-icon" size="3em" />
            </button>
            <button className="social-icon-button" onClick={() => handleButtonClick('linkedin')}>
              <FaLinkedin className="inside-icon" style={{ fontSize: "3em" }} />
            </button>
            <button className="social-icon-button" onClick={() => handleButtonClick('instagram')}>
              <TiSocialInstagram className="inside-icon" size="3.5em" />
            </button>
            <button className="social-icon-button" onClick={() => handleButtonClick('plus')}>
              <AiOutlinePlusCircle className="inside-icon" style={{ fontSize:"2em" }} />
            </button>
          </div>
          <div className='select-text'>
            <p className="selected-color">[ Select Platform ]</p>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className='popup-head'>
          {renderPopupContent()}
          <div className='back-button-content'>
            <p className='back-button-popup' onClick={handleClosePopup}><IoArrowBackCircleOutline   size='1.3rem'/> <span className='span-back'>Back</span> </p>
          </div>
        </div>
      )}
      {isPopupOpen && <div className="background-blur"></div>}
    </>
  );
}

export default Soicalicon;
