import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

 function Applyloan({values,setValues,formErrors}){ 
  
    //let navigate = useNavigate();
    // const [values,setValues] = useState({
    //   Aname:'',
    //   Aaddress:'',
    //   Amobile : '',
    //   Aemailid :'',
    //   Aaadharno : '',
    //   Apanno :'',
    //   Asalary : '',
    //   Acreditscore :'',
    //   loanamountrequired :'',
    //   loanrepaymentmonths :''
      
    // })

    const handleApplicantName =(event) =>{
      setValues({...values,applicantName:event.target.value})
    }
    const handleApplicantAddress =(event) =>{
      setValues({...values,applicantAddress:event.target.value})
    }
    const handleApplicantMobile =(event) =>{
      setValues({...values,applicantMobile:event.target.value})
    }
    const handleApplicantEmail =(event) =>{
      setValues({...values,applicantEmail:event.target.value})
    }
    const handleApplicantAadhar =(event) =>{
      setValues({...values,applicantAadhar:event.target.value})
    }
    
    const handleApplicantPan =(event) =>{
      setValues({...values,applicantPan:event.target.value})
    }
    const handleApplicantSalary =(event) =>{
      setValues({...values,applicantSalary:event.target.value})
    }
    const handleApplicantCreditscore =(event) =>{
      setValues({...values,applicantCreditScore:event.target.value})
    }
    const handleLoanAmountRequired =(event) =>{
      setValues({...values,loanAmountRequired:event.target.value})
    }
    const handleLoanRepaymentMonths =(event) =>{
      setValues({...values,loanRepaymentMonths:event.target.value})
    }
     
  // const nav =(event) =>{
  //     navigate("/UploadDocuments")
  //      //event.preventDefault()
  //   }
   
    return (
      <form className='form'>
        <nav className='applyloan'>
          <label htmlFor ="Aname" style = {{color : "white"}}>Enter Applicant Name  : </label>
        
        <input id="Aname"type="text" value={values.applicantName} onChange={handleApplicantName} placeholder='Enter Applicant Name'/>
        <br />  
        <span>{formErrors.applicantName}</span>
       <br />
        <label htmlFor ="Aaddress" style = {{color : "white"}}>Enter Applicant address  : </label>
        <input type="text" value={values.applicantAddress} onChange={handleApplicantAddress} placeholder='Enter Applicant Address' />
         <br /><span>{formErrors.applicantAddress }</span>
        <br /> <label htmlFor ="Amobileno" style = {{color : "white"}}>Enter Applicant mobile no  : </label>
        <input type="text" value={values.applicantMobile} onChange={handleApplicantMobile} placeholder='Enter Applicant Mobile' />
         <br /><span>{formErrors.applicantMobile }</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Applicant email id  : </label>
        <input type="text"  value={values.applicantEmail} onChange={handleApplicantEmail} placeholder='Enter Applicant Email Id' />
         <br /><span>{formErrors.applicantEmail}</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Applicant aadhar no  : </label>
        <input type="text" value={values.applicantAadhar} onChange={handleApplicantAadhar} placeholder='Enter Applicant Aadhar No' />
         <br /><span>{formErrors.applicantAadhar}</span>
        <br />
        
        </nav>
        <nav className='apply'> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Applicant Pan no  : </label>
        <input type="text" value={values.applicantPan} onChange={handleApplicantPan} placeholder='Enter Applicant Pan No' />
         <br /><span>{formErrors.applicantPan}</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white",marginRight:"28px"}}>Enter Applicant Salary  : </label>
        <input type="text" value={values.applicantSalary} onChange={handleApplicantSalary} placeholder='Enter Applicant Salary' />
         <br /><span>{formErrors.applicantSalary}</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Applicant Creditscore  : </label>
        <input type="text" value={values.applicantCreditScore} onChange={handleApplicantCreditscore} placeholder='Enter Applicant Credit Score' />
         <br /><span>{formErrors.applicantCreditScore}</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Loan amount required  : </label>
        <input type="text" value={values.loanAmountRequired} onChange={handleLoanAmountRequired} placeholder='Enter Loan Amount Required ' />
         <br /><span>{formErrors.loanAmountRequired}</span>
        <br /> <label htmlFor ="Aname" style = {{color : "white"}}>Enter Loan repaymentmonths  : </label>
        <input type="text" value={values.loanRepaymentMonths} onChange={handleLoanRepaymentMonths} placeholder='Enter Loan Repayment Months' />
         <br /><span>{formErrors.loanRepaymentMonths}</span>
        <br />
        {/* <button style={{padding :"7px",paddingLeft:"10px",paddingRight:"10px",marginRight:"250px",marginTop : "50px" ,borderRadius:"5px"}}>next</button> */}
        {/* <a href='uploaddocuments' className='button'>go</a> */}
        {/* <input type="button" onClick="window.location.href='https://google.com';" value="go"></input> */}
       {/* <button to="UploadDocuments" style={{padding :"7px",paddingLeft:"10px",paddingRight:"10px",marginRight:"250px",marginTop : "50px" ,borderRadius:"5px"}}>next</button> */}
      </nav>
     
      </form>
    )
  }


export default Applyloan