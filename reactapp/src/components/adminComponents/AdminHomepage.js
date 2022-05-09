import React from 'react'
import AdminSideNavbar from './AdminSideNavbar'
import AdminHomepageBody from './AdminHomepageBody'
import AdminAllLoans from './AdminAllLoans'
import UsersList from './UsersList'
import AdminLoansAfterDecision from './AdminLoansAfterDecision'
import { Routes, Route } from 'react-router-dom'

export default function AdminHomepage(props){
    return (
        <div>
            <AdminSideNavbar />   
                           
            <Routes>                      
                <Route>
                    <Route exact path="/" element={<AdminHomepageBody />}> </Route>
                    <Route exact path="/userslist" element={<UsersList />}> </Route>
                    <Route exact path="/appliedloans" element={<AdminAllLoans />}> </Route>
                    <Route exact path="/loandetails" element={<AdminLoansAfterDecision />}> </Route>
                    {/* <Route exact path="/logout" element={<LoginForm />}> </Route> */}
                </Route>
            </Routes>
        </div>
    )
}
