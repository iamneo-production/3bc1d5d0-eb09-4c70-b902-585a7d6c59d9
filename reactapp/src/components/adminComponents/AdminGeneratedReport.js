import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const AdminGeneratedReports = (props) => {

  const baseURL = "http://localhost:8080";    

  const [loanDetails, setLoanDetails] = useState([])

  useEffect(() => {
    axios.get(baseURL + `/admin/getLoan/` + props.loanId)
      .then((res) => {
        setLoanDetails(res.data);
        // console.log("LoanDetails: " + res.data);
      })
      .catch((error) => {
        console.log("No such loans found broo!");
      }
      );
  })


  return (
    <div>
      <div className='adminGenerateRepostContaniner'>
        <h4>Report of the Loan</h4>
        <table className="adminGenerateReportTable">

          <tbody>
            <tr><td>LoanId:</td><td><b> {loanDetails.loanId}</b></td></tr>
            <tr><td>Applicant Name:</td><td> <b> {loanDetails.applicantName} </b></td></tr>
            <tr><td>Applicant Email:</td><td><b> {loanDetails.applicantEmail}</b></td></tr>
            <tr><td>Applicant Mobile:</td><td><b> {loanDetails.applicantMobile}</b></td></tr>
            <tr><td>Applicant Address:</td><td><b> {loanDetails.applicantAddress}</b></td></tr>
            <tr><td>Applicant Salary:</td><td><b> {'₹ ' + loanDetails.applicantSalary}</b></td></tr>
            <tr><td>Application Date:</td><td><b> {loanDetails.applicationDate}</b></td></tr>
            <tr><td>Applicant Credit Score:</td><td><b> {loanDetails.creditScore}</b></td></tr>
            <tr><td>Applicant Aadhar No.:</td><td><b> {loanDetails.applicantAadhar}</b></td></tr>
            <tr><td>Applicant PAN:</td><td><b> {loanDetails.applicantPan}</b></td></tr>
            <tr><td>Applicant Loan amount:</td><td><b> {'₹ ' + loanDetails.loanAmountRequired}</b></td></tr>
            <tr><td>Loan repayment months:</td><td><b> {loanDetails.loanRepaymentMonths}</b></td></tr>
          </tbody>
        </table>
        <hr />
        <h6>Documents:</h6>
        <div className="adminCheckDetailsDocuments">
          {/* <button onClick={viewDocumentsHandler}>View documents</button> */}

          <div>
          <h6><b>Aadhar Card</b></h6>
          <img src="" alt="addhar card " />
        </div>
        <div>
          <h6><b>PAN</b></h6>
          <img src="" alt="PAN " />
        </div>
        <div>
          <h6><b>Bank Statement</b></h6>
          <img src="" alt="Bank statement " />
        </div>
        <div>
          <h6><b>Pay-slip</b></h6>
          <img src="" alt="pay slip " />
        </div>
        </div>
        <div>
          <button style={{margin:"10px auto", border:"none", borderRadius:"5px",width:"100px", color:"white", height:"30px", backgroundColor:"#3789f3" }}  onClick={() => alert("Loan Report printed successfully") }>Print</button>
        </div>
      </div>
    </div>
  )
}

export default AdminGeneratedReports;