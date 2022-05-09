import React from 'react';
import '../../common/Main.css';

const AdminLoanDetails = ({ LoanDetail, setActualLoanId, setAdminLoanDetailsDisplay, setAdminLoanDetailsRepayment, setAdminLoanDetailsGeneratedReport }) => {

  

  const adminViewRepaymentScheduleBtn = () => {
    setAdminLoanDetailsDisplay(false);
    setAdminLoanDetailsRepayment(true);
    setActualLoanId(LoanDetail.loanId);
  }                              
  
  const adminGenerateReportBtn = () => {                
    setAdminLoanDetailsDisplay(false);
    setAdminLoanDetailsGeneratedReport(true);
    setActualLoanId(LoanDetail.loanId);
  }

  return (
    <div>
        <div className="admin-card-horizontal">
          <div className="lol row g-0">
            <div>
              <h3 className="cardText1">{LoanDetail.status}</h3>
            </div>
            <div className="col-md-6">        
              <span className="cardText">Loan Id :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.loanId}</span></span>
              <span className="cardText">Name :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.applicantName}</span></span>
              <span className="cardText">Email :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.applicantEmail}</span></span>
              <span className="cardText">Aadhar number :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.applicantAadhar}</span></span>

            </div>
            <div className="col-md-6">
              <span className="cardText">Pan number :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.applicantPan}</span></span>
              <span className="cardText">Salary :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{'₹ '+LoanDetail.applicantSalary}</span></span>
              <span className="cardText">Loan Amount Required :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{'₹ '+LoanDetail.loanAmountRequired}</span></span>
              <span className="cardText">Loan Repayment Months :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.loanRepaymentMonths}</span></span>
            </div>
            <div>
              {LoanDetail.status === "approved" &&
                <div className='text-center' >
                  <button className="aladBtn1" onClick={adminViewRepaymentScheduleBtn}>View repayment schedule</button>
                  <button className="aladBtn2"  onClick={adminGenerateReportBtn}>Generate reports</button>
                </div>
              }
              {
                LoanDetail.status === "rejected" &&
                <span className="cardText">Reason for Rejection :  <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{LoanDetail.rejectionReason}</span></span> 
              }
            </div>
          </div>
        </div>
    </div>
  );
}
export default AdminLoanDetails;