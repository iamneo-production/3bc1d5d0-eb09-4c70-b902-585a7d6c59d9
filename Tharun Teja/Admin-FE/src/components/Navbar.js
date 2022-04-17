import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'


const Navbar= () =>{
  return (
  <div>
    <nav className="navbar">
        <Link tag="a" to='/'><i className="fa fa-fw fa-home"></i>Home Appliance Loan</Link>
        <Link tag="a" to="AppliedLoans" action>Applied Loans</Link>
        <Link tag="a"  to="LoanDetails"><i class="fa fa-book fa-fw" aria-hidden="true"></i> Loan Details</Link>
        <Link id="logout" tag="a" to="Logout" style={{textAlign:"right"}}> <i className="fa fa-sign-out"></i>Logout</Link>
    </nav>
  </div>
  );
}
export default Navbar;