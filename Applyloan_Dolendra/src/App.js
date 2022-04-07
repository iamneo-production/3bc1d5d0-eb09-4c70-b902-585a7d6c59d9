import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Navbar from './Components/Navbar'
import Applyloan from './Components/Applyloan';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UploadDocuments from './Components/UploadDocuments';
import Form from './Components/Form';
import Submit from './Components/Submit';




function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <hr />
      <Navbar />
      <br />
      
         <Routes>
           <Route path="/user/addLoan"
           element={<Form />}> </Route>
           <Route path="/Submit"
           element={<Submit />}> </Route>
          </Routes> 
      
     
      

    </div>
    </Router>
  );
}

export default App;
