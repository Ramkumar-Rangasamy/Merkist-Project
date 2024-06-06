import React, { useState } from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';

import { ImFolderOpen } from 'react-icons/im';
import { AiFillOpenAI } from "react-icons/ai";
import SaveAsIcon from '@mui/icons-material/SaveAs';

//style.css
import './createdocument.css';

//imported postpage 
import Postpage from '../Postpage/Postpage';

const Createdocument = () => {
    const [toggle, setToggle] = useState(4); // Start with Post tab selected
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturate, setSaturate] = useState(100);
    const [temperature, setTemperature] = useState(0);
    const [fade, setFade] = useState(0);
    const [vignette, setVignette] = useState(0);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("Original");
    const [appliedFilter, setAppliedFilter] = useState('none');

    const applyFilter = (filterName) => {
        setAppliedFilter(filterName === "Original" ? 'none' : filters[filterName] || 'none');
        setSelectedFilter(filterName);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const applyFilters = () => {
        let filterStyle = "";

        // Apply adjustments
        filterStyle += `brightness(${brightness}%) `;
        filterStyle += `contrast(${contrast}%) `;
        filterStyle += `saturate(${saturate}%) `;
        filterStyle += `hue-rotate(${temperature}deg) `;
        filterStyle += `opacity(${1 - fade / 100}) `;
        filterStyle += `drop-shadow(0 0 ${vignette}px black) `;

        // Apply selected filter if not 'none'
        if (appliedFilter !== 'none') {
            filterStyle += appliedFilter;
        }

        return filterStyle.trim();
    };

    // Define filters object
    const filters = {
        Original: 'contrast(1.1) brightness(0.9) saturate(1.1)',
        Gingham: 'contrast(1.2) brightness(0.9) saturate(1.1)',
        Clarendon: 'contrast(1.2) saturate(1.1)',
        Moon: 'grayscale(0.4) contrast(1.1) brightness(1.1)',
        Crema: 'sepia(0.3) contrast(1.1) brightness(1.1)',
        Aden: 'invert(0.2) contrast(1.1) brightness(0.9)',
        Juno: 'sepia(0.35) contrast(1.15) brightness(1.05)',
        Lark: 'sepia(0.25) contrast(0.95) brightness(1.05)',
        Ludwig: 'saturate(1.4) contrast(0.85)',
    };

    const handlePost = () => {
        // Here you can handle the post functionality, like sending the file, filters, and adjustments to the server
        console.log("Posting:", {
            file,
            brightness,
            contrast,
            saturate,
            temperature,
            fade,
            vignette,
            selectedFilter
        });
    };

    return (
       <>
       <div className='new-document-container'>
        <div className='new-document-head'>
            <div className="row m-0">
                <div className="col-md-6">
                    <div className="card-uploadoc">
                        <div className="card-body-uploaddoc">
                            <div className='file-upload-icondoc'>
                                <ImFolderOpen  size='3em'/>
                            </div>
                            
                            <div className='button-postdoc'>
                                {!previewUrl && (
                                    <input id="file-upload" type="file" accept="image/*,video/*" onChange={handleFileChange} style={{ display: 'none' }} />
                                )}
                                <h4 className='showing-here pt-1 '>Drag photos and videos here</h4>
                                {!previewUrl && (
                                    <button className='buttoncolorbardoc' onClick={() => document.getElementById("file-upload").click()}>
                                        Select from computer
                                    </button>
                                )}
                                {previewUrl && (
                                    <div>
                                        {file && file.type.startsWith('image') ? (
                                            <img src={previewUrl} alt="Preview" className="preview-mediadoc" style={{ filter: applyFilters() }} />
                                        ) : (
                                            <video controls className="preview-mediadoc" style={{ filter: applyFilters()}}>
                                                <source src={previewUrl} type={file.type} />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form style={{ width: '100%', bgcolor: 'background.paper' }}>
                        <div className="row">
                            <ul className='tab'>
                                <li 
                                    className={file ? (toggle === 2 ? 'flex-fill active' : 'flex-fill') : 'flex-fill disabled'} 
                                    onClick={() => file && setToggle(2)}
                                >
                                    Filter
                                </li>
                                <li 
                                    className={file ? (toggle === 3 ? 'flex-fill active' : 'flex-fill') : 'flex-fill disabled'} 
                                    onClick={() => file && setToggle(3)}
                                >
                                    Adjustment
                                </li>
                                <li 
                                    className={toggle === 4 ? 'flex-fill active' : 'flex-fill'} 
                                    onClick={() => setToggle(4)}
                                >
                                    Post
                                </li>
                            </ul>
                            <div className={toggle === 2 ? "show-content" : "contentt"} >
                                <div className="filter-options" style={{ width: '100%', height: '270px'  }}>
                                    {Object.keys(filters).map(filter => (
                                        <button
                                            key={filter}
                                            className={`filter-button ${selectedFilter === filter ? "active" : ""}`}
                                            onClick={(e) => { e.preventDefault(); applyFilter(filter); }}
                                            style={{ border: 'none', background: 'white', color: "green",fontSmooth:"10px", fontSize:'11px' }}  // Set border and background color
                                        >
                                            {/* Preview for image */}
                                            {file && file.type.startsWith('image') && (
                                                <img src={previewUrl}  alt="Uploaded"  className='hover-image-video'
                                                    style={{ filter: filters[filter],width: '85px', height: '85px', objectFit: 'cover'}}
                                                />
                                            )}
                                            {/* Preview for video */}
                                            {file && file.type.startsWith('video') && (
                                                <video
                                                    controls
                                                    className='hover-image-video' 
                                                    style={{ filter: filters[filter], width: '85px', height: '85px', objectFit: 'cover' }}
                                                >
                                                    <source src={previewUrl} type={file.type} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                            <br />
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={toggle === 3 ? "show-content" : "contentt"} style={{ width: '100%', height: '270px'  }}>
                                <div className="single-slider">
                                    <label className="slider-label">Brightness:</label>
                                    <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{brightness}%</span>
                                </div>
                                <div className="single-slider">
                                    <label className="slider-label">Contrast:</label>
                                    <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{contrast}%</span>
                                </div>
                                <div className="single-slider">
                                    <label className="slider-label">Saturate:</label>
                                    <input type="range" min="0" max="200" value={saturate} onChange={(e) => setSaturate(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{saturate}%</span>
                                </div>
                                <div className="single-slider">
                                    <label className="slider-label">Temperature:</label>
                                    <input type="range" min="-100" max="100" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{temperature}°</span>
                                </div>
                                <div className="single-slider">
                                    <label className="slider-label">Fade:</label><br/>
                                    <input type="range" min="0" max="100" value={fade} onChange={(e) => setFade(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{fade}%</span>
                                </div>
                                <div className="single-slider">
                                    <label className="slider-label">Vignette:</label>
                                    <input type="range" min="0" max="100" value={vignette} onChange={(e) => setVignette(e.target.value)} className="slider-input" />
                                    <span className="slider-value">{vignette}%</span>
                                </div>
                            </div>
                            <div className={toggle === 4 ? "show-content" : "contentt"} style={{ width: '100%', height: '270px'  }}>
                                <Postpage/>
                            </div>
                            <div className="button-container">
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <button className="generate-ai-button"><AiFillOpenAI className='btn-icon' /><span className='btn-text-style'>Generate with AI</span></button>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='d-flex  gap-3'>
                                            <button className="save-button"><SaveAsIcon className='btn-icon'/><span className='btn-text-style'>Save Draft</span></button>
                                            <button className="post-button" onClick={handlePost}><FontAwesomeIcon icon={faCloudUpload} className='btn-icon'/><span className='btn-text-style'>Post</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </div>
        </div>
       </> 
    );
};

export default Createdocument;
