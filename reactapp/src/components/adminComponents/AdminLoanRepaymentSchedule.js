import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import axios from 'axios';
import { NavigationType, useNavigate } from "react-router-dom"
import '../../common/Main.css';

const AdminLoanRepaymentSchedule = (props) => {

    const baseURL = "http://localhost:8080";
    const user = JSON.parse(localStorage.getItem('user'));

    const [repayment, setRepayment] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseURL + `/admin/getRepaymentSchedule/` + props.loanId)
            .then(response => {
                setRepayment(response.data);
                console.log("the props loan id in URS is " + props.loanId);
            })
            .catch(error => {
                console.log("error occured while fetching the repayment loan id in ALRS");

            })
    }, {})

    const loanRepayAdminEditBtnHandler = () => {
        console.log("inside loanRepayAdminEditBtnHandler: ");
        // navigate("/userhomepage/payment", { state: { Amount: repayment.installmentDue, LoanId: props.loanId } })
    }

    const loanRepayAdminDeleteBtnHandler = () => {
        console.log("inside loanRepayAdminDeleteBtnHandler: " );
        // navigate("/userhomepage/payment", { state: { Amount: repayment.installmentDue, LoanId: props.loanId } })
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
                    {user.roles[0] === 'ROLE_ADMIN' ?
                        <>
                            <button className="payInstallment" disabled={repayment.balanceAmount === 0} onClick={loanRepayAdminEditBtnHandler}>Edit</button>
                            <button className="payInstallment" disabled={repayment.balanceAmount === 0} onClick={loanRepayAdminDeleteBtnHandler}>Delete</button>
                        </>
                        :
                        null
                    }
                </div>
            </div>

        </>

    );
}

export default AdminLoanRepaymentSchedule