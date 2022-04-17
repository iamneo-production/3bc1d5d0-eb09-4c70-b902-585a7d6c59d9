import React from 'react';
import './style.css';

const LoanDetails = ({ LoanDetail }) => {

  return (
    <div>
      <div class="card-horizontal">
        <div class="lol row g-0">
          <div>
            <h3 class="cardText1 text-uppercase">{LoanDetail.status}</h3>
          </div>
          <div class="col-md-4">
            {/* <h6 class="cardSubtitle text-center fw-bold"> </h6> */}
            <p class="cardText">Name : {LoanDetail.name}</p>
            <p class="cardText">Phone : {LoanDetail.phone}</p>
            <p class="cardText">Email : {LoanDetail.email}</p>
            <p class="cardText">Aadhar number : {LoanDetail.aadhar_no}</p>

          </div>
          <div class="col-md-4">
            <p class="cardText">Pan number : {LoanDetail.pan_no}</p>
            <p class="cardText">Salary : {LoanDetail.salary}</p>
            <p class="cardText">Loan Amount Required : {LoanDetail.loanAmountRequired}</p>
            <p class="cardText">Loan Repayment Months : {LoanDetail.loanRepaymentMonths}</p>
          </div>
          <div>
            {LoanDetail.status === "approved" &&
              <div className='text-center' >
                <button className="btn btn-warning">View repayment schedule</button>
                <button className="btn btn-danger">Generate reports</button>
              </div>
            }
            {
              LoanDetail.status === "rejected" &&
              <p class="cardText">Reason for Rejection : {LoanDetail.reasonForRejection}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoanDetails;