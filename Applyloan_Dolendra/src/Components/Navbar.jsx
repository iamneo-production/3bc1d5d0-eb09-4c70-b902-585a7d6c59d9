import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/user/addLoan"><i className="fa fa-fw fa-home"></i>ApplyLoan</Link>
                <Link to="LoanStatus"><i className="fa fa-fw fa-eye"></i>LoanStatus</Link>
                <Link to="Profile"><i className="fa fa-fw fa-user"></i>Profile</Link> 
                <Link id="logout" to="Logout" style={{marginLeft :"30px"}}> <i className="fa fa-sign-out"></i>Logout</Link>
           
            </nav>
           
            
           
           
        )
    }
}

export default Navbar
