import React, { useState, useEffect } from 'react';
import ModalAdminLoanRejection from "./ModalAdminLoanRejection"
import ModalAdminCheckDetails from './ModalAdminCheckDetails'
import axios from "axios"
import 'reactjs-popup/dist/index.css';
import '../../common/Main.css';


const AppliedLoans = ({ ApplyLoan, update }) => {

  const baseURL = "http://localhost:8080";

  const [modal, setModal] = useState(false);
  const [modalAdminCheckDetails, setModalAdminCheckDetails] = useState(false);

  const [aadhar, setAadhar] = useState("");
  const [pancard, setPancard] = useState("");
  const [bankStatement, setBankStatement] = useState("");
  const [payslip, setPayslip] = useState("");

  let loanModel = {
    "applicantName": ApplyLoan.applicantName,
    "applicantAddress": ApplyLoan.applicantAddres,
    "applicantMobile": ApplyLoan.applicantMobile,
    "applicantEmail": ApplyLoan.applicantEmail,
    "applicantAadhar": ApplyLoan.applicantAadhar,
    "applicantPan": ApplyLoan.applicantPan,
    "applicantSalary": ApplyLoan.applicantSalary,
    "creditScore": ApplyLoan.creditScore,
    "loanAmountRequired": ApplyLoan.loanAmountRequired,
    "loanRepaymentMonths": ApplyLoan.loanRepaymentMonths,
    "status": ApplyLoan.status,
    "currentStatus": ApplyLoan.currentStatus
  }


  useEffect(() => {
    axios.get(baseURL + `/admin/documents/${ApplyLoan.loanId}`)
      .then((res) => {
        // console.log("inside admin apllied loans-- setting the data in  files now " + res.data.aadhar);
        // setAadhar(res.data.aadhar);
        // setPancard(res.data.pancard);
        // setBankStatement(res.data.bankStatement);
        // setPayslip(res.data.payslip);
        // console.log("inside admin applied loans: " + res.data.aadhar);

      },
        (error) => {
          // console.log("error inside admin applied loans axios " + error);
        })
  }, [])

  const onSubmitApprove = () => {
    let status = "approved";
    axios.put(baseURL + `/admin/editLoan/${ApplyLoan.loanId}/${status}`)
      .then((Response) => {
        update(ApplyLoan.loanId);
        window.location.reload(false);
      }
      );

    // axios.post(baseURL + `/repayment/addRepayment`, loanModel)
    //   .then((res) => {
    //     console.log("Repayment model created!");
    //   })
    //   .catch((error) => {
    //     console.log("Error occured while creating Repayment model!");      
    //   });

    alert(`Loan ${ApplyLoan.loanId} is approved`);
  };

  const handleAdminCheckDetails = () => {
    setModalAdminCheckDetails(true);
  }

  return (
    <>
      <div className="admin-card-horizontal">
        <div className="lol row g-0">
          <div className="col-md-6">
            <span className="cardText">Name : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.applicantName}</span></span>

            <span className="cardText">Phone : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.applicantMobile}</span></span>

            <span className="cardText">Email : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.applicantEmail}</span></span>

            <span className="cardText">Aadhar number : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.applicantAadhar}</span></span>
          </div>
          <div className="col-md-6">

            <span className="cardText">PAN : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.applicantPan}</span></span>

            <span className="cardText">Salary : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>₹ {ApplyLoan.applicantSalary}</span></span>

            <span className="cardText">Loan Amount Required: <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>₹ {ApplyLoan.loanAmountRequired}</span></span>

            <span className="cardText">Loan Repayment Months : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{ApplyLoan.loanRepaymentMonths}</span></span>
          </div>
          <div>
            <div className='appliedLoansButtons'>
              <button className="alb-danger" id="adminRejectLoan" onClick={() => setModal(true)}>Reject</button>
              <button className="alb-success" id="adminAproveLoan" type="submit" onClick={onSubmitApprove}>Approve</button>
              <button className="alb-primary" id="adminCheckLoan" onClick={handleAdminCheckDetails}>Check Details</button>
            </div>
          </div>
        </div>

        <div>{modal && <ModalAdminLoanRejection setModal={setModal} ApplyLoan={ApplyLoan} />}</div>

        <div>{modalAdminCheckDetails && <ModalAdminCheckDetails setModalAdminCheckDetails={setModalAdminCheckDetails} ApplyLoan={ApplyLoan} aadhar={aadhar} pancard={pancard} bankStatement={bankStatement} payslip={payslip} />}</div>
      </div>
    </>
  );
}
export default AppliedLoans;       