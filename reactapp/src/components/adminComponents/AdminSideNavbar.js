import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../common/Main.css'              


const AdminSideNavbar= () =>{                  
  return (                 
  <div>             
    <nav className="adminNavbar">
        {/* <NavLink to='' >Home Appliance Loan</NavLink> */}
        <NavLink to='userslist' >User List</NavLink>
        <NavLink to="appliedloans" id="adminAppliedLoans">Applied Loans</NavLink>
        <NavLink to="loandetails" id="adminLoanDetails">Loan Details</NavLink>
        {/* <NavLink to="/logout"  style={{marginLeft:"350px"}}>Logout</NavLink>   */}
    </nav>
  </div>
  );
}
export default AdminSideNavbar;