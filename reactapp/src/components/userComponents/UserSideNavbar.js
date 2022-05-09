import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../common/Main.css'


class UserSideNavbar extends Component {
    render() {
        return (
            <nav className="UserSideNavbar">
                <div className="UserSideNavbarLinks">
                    <ul>
                        <li style={{listStyle:"none", display:"inline"}}>
                            <NavLink to="/userhomepage/addloan" id="applyLoan" className={({isActive}) => (isActive ? "active-style" : 'none')}>Apply for Loan</NavLink>
                        </li>

                        <li style={{listStyle:"none", display:"inline"}}>
                            <NavLink to="/userhomepage/userloanstatus/" id="loanStatus" className={({isActive}) => (isActive ? "active-style" : 'none')}>Loan Status</NavLink>
                        </li>

                        <li style={{listStyle:"none", display:"inline"}}>
                            <NavLink to="/userhomepage/profile" id="profile" className={({isActive}) => (isActive ? "active-style" : 'none')}>Profile</NavLink>
                        </li>

                        {/* <NavLink to="/logout" style={{ marginLeft: "300px" ,marginRight: "-100px" }}>Logout</NavLink> */}

                    </ul>
                </div>

            </nav>




        )
    }
}

export default UserSideNavbar