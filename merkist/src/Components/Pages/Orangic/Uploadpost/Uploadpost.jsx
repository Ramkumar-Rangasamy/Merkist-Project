import React, { useState, useRef } from 'react';
// Import CSS file
import './uploadpost.css'; 

//Link and usenavigate import
import {Link ,useNavigate } from 'react-router-dom';

//imported react iocns
import { MdDelete } from "react-icons/md";
import { ImFolderOpen } from "react-icons/im";



function Uploadpost() {
  
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    navigate('/display', { state: { file: selectedFile } });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="card-upload-post">
        <p className='postcreate'>Create new post</p>  
        <p className='black-hr'></p>

        <div className='icon-logo-image '>
          <ImFolderOpen  size='3em'/>
        </div>

        <div className='drag-content pt-2'>
          <h4 className='showing-here'>Drag photos and videos here</h4>
          <input type="file" id="file-upload" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange}/>
          <button className='select-bar mt-3' onClick={handleButtonClick}>Select from computer</button>
        </div>

        <div className='pt-2'>
          <h5 className='showing-or pt-2'>OR</h5>
          <Link to='/create-document'><button className='create-doucment-bar'>Creat new document</button></Link>
        </div>

        <div className='draft-content'>
        <button className='draft-bar'><MdDelete  className='mb-1' size='1rem'/>draft</button>
        </div>
      </div>
    </>
  );
}

export default Uploadpost;
