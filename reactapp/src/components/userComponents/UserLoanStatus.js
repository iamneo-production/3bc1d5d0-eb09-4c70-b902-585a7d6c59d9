import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';        
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import UserLoanTrackedInfo from './UserLoanTrackedInfo';
import '../../common/Main.css';

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
 
const UserLoanStatus = () => {

    const baseURL = "http://localhost:8080";       

    const navigate = useNavigate();
    const [loan, setLoan] = useState([]);
    const [loanId, setloanId] = useState();

    const [userLoanTrackerComp, setUserLoanTrackerComp] = useState(true);
    const [userTrackedLoanComp, setUserTrackedLoanComp] = useState(false);
    const [userRepaymentScheduleComp, setUserRepaymentScheduleComp] = useState(false);


    const onInputChange = event => {
        setloanId(event.target.value);
        // console.log(event.target.value)
    }

    // useEffect(() => {
      
    //     axios.get(baseURL+`/getLoan/`+loanId)
    //     .then(response => setLoan(response.data));

    //     console.log("Inside handle track userloanId : "+loanId);
    //     // console.log("Inside handle track loan: "+loan.loanId);
    //     console.log("Inside handle track loan amount required: "+loan.loanAmountRequired);
    //     console.log("Inside handle track loan application date: "+loan.applicationDate);
    
    //   return () => {
    //     // second
    //   }
    // }, 
    // // [third]
    // )
    

    const handleTrackUserLoan = () => {
        setUserLoanTrackerComp(false);
        setUserTrackedLoanComp(true);
        localStorage.setItem('loanId', loanId);

        axios.get(baseURL+`/user/getLoan/`+loanId)
        .then(response => setLoan(response.data))
        .catch((error) => console.log("Error occured in user loan status: "+error));
    }                   

    const handleUserLoanRepaymentSchedule = () => {
        setUserTrackedLoanComp(false);            
        setUserRepaymentScheduleComp(true);
    }

    const handleUserLoanCheckDetails = () => {
        console.log(loan.rejectionReason);
    }

    return (
        <div>
            {
                userLoanTrackerComp &&

                <div className="loanStatusContainer">
                    <div className="loanStatusHeading">
                        <h3>Track Your Application</h3>
                    </div>
                    <div className='tracking'>
                        <div>
                            <div className="form_id">
                                <label htmlFor="enterloanId">Enter your Loan Id: </label>
                                <input type="text" placeholder="Enter Loan Id here" id="enterLoanId" onChange={onInputChange} size="13"></input>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleTrackUserLoan} id="trackButton" className="trackButton" >Track</button>
                        </div>

                    </div>
                    {/* <h5>Loans applied: </h5>
                    <div className='loanStatusDisplay'>
                        <table className='loanStatusTable'>
                            <thead>
                                <tr>
                                    <th>Loan ID</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{loan.loanId}</td>
                                    <td>{loan.loanAmountRequired}</td>
                                    <td>{loan.applicationDate}</td>
                                    <td> <button className="userLoanStatusTableEditBtn">Edit</button> </td>
                                    <td> <button className="userLoanStatusTableDeleteBtn">Delete</button> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            }
               
            {
                userTrackedLoanComp &&
                <UserLoanTrackedInfo loan={loan} />
            }

        </div >             
       

    );
}         


export default UserLoanStatus