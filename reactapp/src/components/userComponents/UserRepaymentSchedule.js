import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigationType, useNavigate } from "react-router-dom"
import '../../common/Main.css';
// import { Routes, Route } from "react-router-dom"
// import Payment from './userComponents/Payment';

const UserRepaymentSchedule = (props) => {

    const baseURL = "http://localhost:8080";
    const user = JSON.parse(localStorage.getItem('user'));

    const [repayment, setRepayment] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseURL + `/repayment/` + props.loanId)
            .then(response => {
                setRepayment(response.data);
                console.log("the props loan id in URS is " + props.loanId);
            })
            .catch(error => {
                console.log("error occured while fetching the repayment loan id in URS");

            })
    }, {})

    const payBtnHandler = () => {
        console.log("inside pay btn hanler: " + props.loanId);
        navigate("/userhomepage/payment", { state: { Amount: repayment.installmentDue, LoanId: props.loanId } })
    }

    return (
        <>
            <div className="userRepaymentScheduleContainer">
                <div className='userRepaymentScheduleHeading'>Repayment Schedule</div>
                <table className='userRepaymentScheduleTable'>
                    <thead>
                        <tr>
                            <th>Loan Id</th>
                            <th>Installment No.</th>
                            <th>Installment amount</th>
                            <th>Installment Due date</th>
                            <th>Total amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.loanId}</td>
                            <td>{repayment.monthCounter}</td>
                            <td>₹ {repayment.installmentDue}</td>
                            <td>{repayment.installmentDate}</td>
                            <td>₹ {repayment.balanceAmount}</td>
                        </tr>
                    </tbody>

                </table>
                <div>
                    {user.roles[0] === 'ROLE_USER' ?
                        <button className="payInstallment" disabled={repayment.balanceAmount === 0} onClick={payBtnHandler}>Pay Now</button>
                        :
                        <>
                            <button className="payInstallment" disabled={repayment.balanceAmount === 0} onClick={payBtnHandler}>Edit</button>
                            <button className="payInstallment" disabled={repayment.balanceAmount === 0} onClick={payBtnHandler}>Delete</button>
                        </>
                    }
                </div>
            </div>

        </>

    );
}

export default UserRepaymentSchedule