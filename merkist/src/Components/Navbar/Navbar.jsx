import React from 'react'

//imported css
import './navbar.css';  


//Navbar react-icons imported
import { FaSearch } from "react-icons/fa";
import { ImFolderPlus } from "react-icons/im";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { SiCocacola } from "react-icons/si";



const Navbar = () => {
  return (
   <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto font">
            <li className="nav-item">
              <a className="nav-link" href="#"><FaSearch className='nav-style'/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><ImFolderPlus className='nav-style'/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><BsFillEnvelopeExclamationFill className='nav-style' /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><BiSolidBellRing className='nav-style'/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><SiCocacola className='cocaola' /></a>
            </li>
          </ul>
        </div>
      </nav>
   </>
  )
}

export default Navbar