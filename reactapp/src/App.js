
//TO BE INSTALLED BEFORE
// npm install react-bootstrap bootstrap@5.1.3
// npm install bootstrap@3
// npm i formik
// npm i yup      
// npm i axios
// npm i reactjs-popup
// npm install react-router-dom --save
// npm i react-toastify
// npm i react-select
// npm i validator
// npm i react-validation


import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AuthService from "./services/auth.service";
import Login from "./common/Login";
import Register from "./common/Register";
import UserHomepage from "./components/userComponents/UserHomepage";
import AdminHomepage from "./components/adminComponents/AdminHomepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './common/Main.css';


const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <li style={{ color: "white", listStyle: "none", marginLeft: "490px", marginRight: "270px", fontSize: "22px" }}>HOME APPLIANCE LOAN APPLICATION</li>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={currentUser.username === 'admin' ? "/adminhomepage" : "/userhomepage"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/signin" className="nav-link" onClick={logOut} id="logout">
                Log Out
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link" id="signinLink">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link" id="signupLink">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/userhomepage/*" element={<UserHomepage />} />
          <Route exact path="/adminhomepage/*" element={<AdminHomepage />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;