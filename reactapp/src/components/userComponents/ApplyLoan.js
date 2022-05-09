import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"
import axios from "axios"
import '../../common/Main.css'

function ApplyLoan({ values, setValues, formErrors }) {

  const handleApplicantName = (event) => {
    setValues({ ...values, applicantName: event.target.value })               
  }
  const handleApplicantAddress = (event) => {
    setValues({ ...values, applicantAddress: event.target.value })
  }
  const handleApplicantMobile = (event) => {
    setValues({ ...values, applicantMobile: event.target.value })
  }
  const handleApplicantEmail = (event) => {
    setValues({ ...values, applicantEmail: event.target.value })
  }
  const handleApplicantAadhar = (event) => {
    setValues({ ...values, applicantAadhar: event.target.value })
  }

  const handleApplicantPan = (event) => {
    setValues({ ...values, applicantPan: event.target.value })
  }
  const handleApplicantSalary = (event) => {
    setValues({ ...values, applicantSalary: event.target.value })
  }
  const handleApplicantCreditscore = (event) => {
    setValues({ ...values, creditScore: event.target.value })
  }
  const handleLoanAmountRequired = (event) => {
    setValues({ ...values, loanAmountRequired: event.target.value })
  }
  const handleLoanRepaymentMonths = (event) => {
    setValues({ ...values, loanRepaymentMonths: event.target.value })
  }

  return (

    <form className='form'>
      <div className='applyLoanHeader'>Fill all the boxes below :</div>
      <nav className='applyLoanInputs'>
        <table className='loanFormTable'>
          <tbody>
            <tr>         
              <td>
                <label className='loanFormLabel'>Applicant Name </label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterName" value={values.applicantName} onChange={handleApplicantName} placeholder='Enter Applicant Name' />
                <p className="loanFormErrorDisplay">{formErrors.applicantName}</p>
              </td>
              <td>
                <label className='loanFormLabel'>Applicant address </label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterAddress" value={values.applicantAddress} onChange={handleApplicantAddress} placeholder='Enter Applicant Address' />
                <p className="loanFormErrorDisplay">{formErrors.applicantAddress}</p>
              </td>
            </tr>
            <tr>
              <td>
                <label className='loanFormLabel'>Applicant mobile no.</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterMobile" value={values.applicantMobile} onChange={handleApplicantMobile} placeholder='Enter Applicant Mobile' />
                <p className="loanFormErrorDisplay">{formErrors.applicantMobile}</p>
              </td>
              <td>
                <label className='loanFormLabel'>Applicant email</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterEmail" value={values.applicantEmail} onChange={handleApplicantEmail} placeholder='Enter Applicant Email Id' />
                <p className="loanFormErrorDisplay">{formErrors.applicantEmail}</p>
              </td>
            </tr>          
            <tr>
              <td>
                <label className='loanFormlabel'>Applicant Aadhar no.</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterAadharNo" value={values.applicantAadhar} onChange={handleApplicantAadhar} placeholder='Enter Applicant Aadhar No' />
                <p className="loanFormErrorDisplay">{formErrors.applicantAadhar}</p>
              </td>
              <td>
                <label className='loanFormLabel'>Applicant PAN</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterPanNo" value={values.applicantPan} onChange={handleApplicantPan} placeholder='Enter Applicant Pan' />
                <p className="loanFormErrorDisplay">{formErrors.applicantPan}</p>
              </td>
            </tr>
            <tr>
              <td>
                <label className='loanFormLabel'>Applicant Salary</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterSalary" value={values.applicantSalary} onChange={handleApplicantSalary} placeholder='Enter Applicant Salary' />
                <p className="loanFormErrorDisplay">{formErrors.applicantSalary}</p>
              </td>
              <td>
                <label className='loanFormLabel'>Applicant credit score</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterCreditScore" value={values.creditScore} onChange={handleApplicantCreditscore} placeholder='Enter Applicant Credit Score' />
                <p className="loanFormErrorDisplay">{formErrors.creditScore}</p>
              </td>
            </tr>
            <tr>
              <td>
                <label className='loanFormLabel'>Loan amount required</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterAmount" value={values.loanAmountRequired} onChange={handleLoanAmountRequired} placeholder='Enter Loan Amount Required ' />
                <p>{formErrors.loanAmountRequired}</p>
              </td>
              <td>
                <label className='loanFormLabel'>Loan repayment months</label>
                <input style={{border:"0.5px solid grey"}} type="text" id="enterMonths" value={values.loanRepaymentMonths} onChange={handleLoanRepaymentMonths} placeholder='Enter Loan Repayment Months' />
                <p>{formErrors.loanRepaymentMonths}</p>
              </td>            
            </tr>
          </tbody>
        </table>
      </nav>
    </form >
  )
}


export default ApplyLoan 