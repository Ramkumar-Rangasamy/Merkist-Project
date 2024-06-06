import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//All components 
import Layout from './Components/Layout/Layout';
import Analytics from './Components/Pages/Analytics/Analytics';
import Soicalicon from './Components/Pages/Orangic/Soicalicon';
import Uploadpost from './Components/Pages/Orangic/Uploadpost/Uploadpost';
import Showingpost from './Components/Pages/Orangic/Showingpost/Showingpost';
import Createdocument from './Components/Pages/Orangic/Createdocuments/Createdocument';
import Firstupload from './Components/Pages/Orangic/Uploadpost/Firstupload';



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Analytics />}/>
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/orangic-post" element={<Soicalicon/>} />
          <Route path="/select-from-computer" element={<Firstupload/>} />
          <Route path="/Creat new document" element={<Uploadpost/>} />
          <Route path="/display" element={<Showingpost/>} />
          <Route path="/create-document" element={<Createdocument/>} />

        </Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;