import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Notification from '../Navbar/Notification';
const Layout = () => {

  

  return (
    <>
    
        <div style={{ display: 'flex',fontFamily: 'Raleway, sans-serif'}}>
            <Sidebar />
            <div style={{ flex:1,backgroundColor:"#184D32"}}>
              <Navbar/> 
              <Notification/> 
            <div>
              <Outlet />
             </div>
            </div>
        </div>
   
    </>





  )
}

export default Layout