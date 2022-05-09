import React from 'react';
import UserSideNavbar from './UserSideNavbar'
import HomepageBody from './UserHomepageBody';
import UserLoanStatus from './UserLoanStatus';
import Profile from './Profile'
import {Routes, Route } from "react-router-dom"  
import LoanSubmit from './LoanSubmit';
import Payment from './Payment';
import ThankyouPage from './ThankyouPage';
import NewLoanForm from './NewLoanForm';
import Login from '../../common/Login';
 

function UserHomepage(props) {
  return (    
    <div>      
      <UserSideNavbar />

        <Routes>                           
          <Route exact path="/" element={ <HomepageBody /> }> </Route>
          <Route exact path="/addloan" element={ <NewLoanForm /> }> </Route>
          <Route exact path="/userloanstatus/" element={ <UserLoanStatus /> }> </Route>          
          <Route exact path="/profile" element={ <Profile /> }> </Route>
          <Route exact path="/submit" element={ <LoanSubmit /> }> </Route>
          <Route exact path="/payment" element={ <Payment /> }> </Route>
          <Route exact path="/thankyou" element={ <ThankyouPage /> }> </Route>
          <Route path="*" element={<Login /> }> </Route>
        </Routes>

    </div>
  );     
}
  
export default UserHomepage;