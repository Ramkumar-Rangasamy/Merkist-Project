import React, { useState, useEffect } from 'react';

//using location
import { useLocation } from 'react-router-dom';

//style.css
import './showingpost.css';

//useing postpage components
import Postpage from '../Postpage/Postpage';


//import react icons 
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SaveAsIcon from '@mui/icons-material/SaveAs';

//import react icons 
import { AiFillOpenAI } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Showingpost = () => {

    const [toggle, setToggle] = useState(1);
    const location = useLocation();
    const file = location.state ? location.state.file : null;
    const [imageURL, setImageURL] = useState(null); // State to store image URL
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturate, setSaturate] = useState(100);
    const [temperature, setTemperature] = useState(0);
    const [fade, setFade] = useState(0);
    const [vignette, setVignette] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("Original");
    const [lastFilter, setLastFilter] = useState("Original");
    const [filterStyle, setFilterStyle] = useState('none');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
 

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
    
    useEffect(() => {
        if (file) {
            setImageURL(URL.createObjectURL(file));
        }
    }, [file]);

    const filters = {
        Original: 'contrast(1) brightness(1) saturate(1)',
        Clarendon: 'contrast(1.2) saturate(1.1)',
        Crema: 'sepia(0.3) contrast(1.1) brightness(1.1)',
        Juno: 'sepia(0.35) contrast(1.15) brightness(1.05)',
        Lark: 'sepia(0.25) contrast(0.95) brightness(1.05)',
        Gingham: 'contrast(1.2) brightness(0.9) saturate(1.1)',
        Lundwig: 'saturate(1.4) contrast(0.85)',
        Moon: 'grayscale(0.4) contrast(1.1) brightness(1.1)',
        Aden: 'invert(0.2) contrast(1.1) brightness(0.9)',
    };

    const updateToggle = (id) => {
        setToggle(id);
    };

    const applyFilter = (filter) => {
        setSelectedFilter(filter);
        let filterValue = 'none';
    
        if (filter !== 'Original') {
            filterValue = filters[filter] || 'none';
            setLastFilter(filter);
            setBrightness(100);
            setContrast(100);
            setSaturate(100);
            setTemperature(0);
            setFade(0);
            setVignette(0);
        } else {
            if (lastFilter !== 'Original') {
                filterValue = 'none';
                setSelectedFilter(filter);
                setLastFilter("Original");
            } else {
                filterValue = filters["Original"] || 'none';
            }
        }
    
        setFilterStyle(filterValue);
    };
    

    const updateFilters = () => {
        let filterValues = '';
        if (selectedFilter !== 'Original') {
            filterValues = filters[selectedFilter] || '';
        }
    
        filterValues += ` brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${temperature}deg) brightness(${100 - fade}%) sepia(${vignette}%)`;
    
        return filterValues.trim();
    };
    

    const goBackToUpload = () => {
        window.history.back();
    };

    
  
    const handleClosePopup = () => {
    
      setIsPopupOpen(false);
    };

    return (
        <> 
            <div className='dispaly_head'>
                <div className="dispaly_container">
                    <div className="row   m-0 ">

                        <div className="col-md-6 ">
                            {imageURL && (
                                <div>
                                    {file.type.startsWith('image') ? (
                                        <img src={imageURL} alt="Uploaded" className="img-fluid" style={{filter: updateFilters()}} />
                                    ) : (
                                        <video src={imageURL} controls className="img-fluid" style={{filter: updateFilters()}} />
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="col-md-6">
                            <form style={{ width: '100%', bgcolor: 'background.paper' }}>
                                <div className="row">
                                    <ul className='tab'>
                                        <li className={toggle === 1 ? 'flex-fill active' :  'flex-fill'} onClick={() => updateToggle(1)}>Filters</li>
                                        <li className={toggle === 2 ? 'flex-fill active' :  'flex-fill'} onClick={() => updateToggle(2)}>Adjustment</li>
                                        <li className={toggle === 3 ? 'flex-fill active' :  'flex-fill'} onClick={() => updateToggle(3)}>Post</li>
                                    </ul>
                                    <div className={toggle === 1 ? "show-content" : "contentt"}>

                                        <div className="filter-options" style={{ width: '100%', height: '270px'  }}>
                                            {Object.keys(filters).map(filter => (
                                                <button
                                                    key={filter}
                                                    className={ `filter-button ${selectedFilter === filter ? "active" : ""}`}
                                                    onClick={(e) => { e.preventDefault(); applyFilter(filter); }}
                                                    style={{ border: 'none', background: 'white', color: "green",fontSmooth:"10px", fontSize:'11px' }} // Set border and background color
                                                >   
                                                    {file.type.startsWith('image') ? (
                                                        <img src={imageURL} alt="Uploaded" className='hover-image-video' style={{ filter: filters[filter], width: '85px', height: '85px', objectFit: 'cover' }} />
                                                    ) : (
                                                        <video controls  className='hover-image-video' style={{ filter: filters[filter], width: '85px', height: '85px', objectFit: 'cover' }}>
                                                            <source src={imageURL} type={file.type} />
                                                          Your browser does not support the video tag.
                                                        </video>
                                                    )}
                                                    <br />
                                                    {filter}
                                                </button>
                                            ))}
                                        </div>

                                    </div>

                                    <div className={toggle === 2 ? "show-content adjustment-sliders colorbar" : "contentt adjustment-sliders colorbar"}  style={{ width: '100%', height: '270px'  }}>
                                        <div className="single-slider">
                                            <label className="slider-label">Brightness</label>
                                            <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{brightness}%</span>
                                        </div>
                                        <div className="single-slider">
                                            <label className="slider-label">Contrast</label>
                                            <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{contrast}%</span>
                                        </div>
                                        <div className="single-slider">
                                            <label className="slider-label">Saturate</label>
                                            <input type="range" min="0" max="200" value={saturate} onChange={(e) => setSaturate(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{saturate}%</span>
                                        </div>
                                        <div className="single-slider">
                                            <label className="slider-label">Temperature</label>
                                            <input type="range" min="-100" max="100" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{temperature}°</span>
                                        </div>
                                        <div className="single-slider">
                                            <label className="slider-label">Fade</label><br/>
                                            <input type="range" min="0" max="100" value={fade} onChange={(e) => setFade(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{fade}%</span>
                                        </div>
                                        <div className="single-slider">
                                            <label className="slider-label">Vignette</label>
                                            <input type="range" min="0" max="100" value={vignette} onChange={(e) => setVignette(e.target.value)} className="slider-input" />
                                            <span className="slider-value">{vignette}%</span>
                                        </div>
                                    </div>

                                    <div className={toggle === 3 ? "show-content " : "contentt"} style={{ width: '100%', height: '270px'  }}>
                                      <Postpage/>
                                    </div>
                                
                                </div>
                            </form>
                            <div className="button-container">
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <button className="generate-ai-button"><AiFillOpenAI className='btn-icon' /><span className='btn-text-style'>Generate with AI</span></button>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='d-flex  gap-3'>
                                            <button className="save-button"><SaveAsIcon className='btn-icon'/><span className='btn-text-style'>Save Draft</span></button>
                                        
                                            <button className="post-button"  onClick={togglePopup}><FontAwesomeIcon icon={faCloudUpload} className='btn-icon'/><span className='btn-text-style'>Post</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                        {/* Popup container */}
                        <div>
                            {isPopupOpen && (
                                <div className="popup-container-post">
                                    <div>
                                        <p className='also-post'>Also post to</p>  
                                        <p className='black-hr-tag '></p>
                                    </div>
                                    <div className= "container-icon-popup gap-2 pt-3">
                                        <button className="pcontainer"  rel="noopener noreferrer">
                                         <FaXTwitter className='icon-popup-post' size="2.2em" />
                                        </button>
                                        <button className="pcontainer"  rel="noopener noreferrer">
                                            <ImFacebook2 className='icon-popup-post' size="2em" />
                                        </button>
                                        <button className="pcontainer" rel="noopener noreferrer">
                                            <ImLinkedin className='icon-popup-post' size="2em" />
                                        </button>
                                        <button className="pcontainer"rel="noopener noreferrer">
                                            <ImInstagram className='icon-popup-post' size="2em"/>
                                        </button>
                                        <button className="pcontainer" >
                                            <AiOutlinePlusCircle className='icon-popup-post ' size="1.7em"  />
                                        </button>
                                    </div>
                                    <div className='container-last-popup-button mt-5 '>
                                        <button className=" cancel-button-popup"rel="noopener noreferrer" onClick={handleClosePopup}>Cancel</button>
                                        <button className="post-button-popup">Post</button>
                                    </div>
                                </div>
                            )}

                            {/* Background blur effect */}
                            {isPopupOpen && <div className="background-blur"></div>}
                        </div>
                    </div>
                </div> 
            </div>  
        </>
    );
};

export default Showingpost;
