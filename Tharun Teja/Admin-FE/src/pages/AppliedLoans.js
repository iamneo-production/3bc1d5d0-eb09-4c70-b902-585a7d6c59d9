import React, { useState } from 'react';
import Modal from "./Modal"
import 'reactjs-popup/dist/index.css';
import './style.css';
import { Link } from 'react-router-dom';
import axios from "../Api/bootapi"


const AppliedLoans = ({ ApplyLoan, update }) => {


  const [modal, setModal] = useState(false);
  // if (modal) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }


  const onSubmitApprove = () => {
    console.log(ApplyLoan.loanId);
    let status = "approved";
    axios.put(`/admin/updatestatus/${ApplyLoan.loanId}/${status}`).then(
      (Response) => {
        console.log("approved",Response.data);
        update(ApplyLoan.loanId);
      }
    );
  };


  return (
    <>
      <div class="card-horizontal">
        <div class="lol row g-0">
          <div class="col-md-4">
            {/* <h6 class="cardSubtitle text-center fw-bold"> </h6> */}
            <p class="cardText">Name : {ApplyLoan.name}</p>
            <p class="cardText">Phone : {ApplyLoan.phone}</p>
            <p class="cardText">Email : {ApplyLoan.email}</p>
            <p class="cardText">Aadhar number : {ApplyLoan.aadhar_no}</p>
          </div>
          <div class="col-md-4">
            <p class="cardText">Pan number : {ApplyLoan.pan_no}</p>
            <p class="cardText">Salary : {ApplyLoan.salary}</p>
            <p class="cardText">Loan Amount Required : {ApplyLoan.loanAmountRequired}</p>
            <p class="cardText">Loan Repayment Months : {ApplyLoan.loanRepaymentMonths}</p>
          </div>
          <div>
            <div className='text-center'>
              <button className="btn btn-danger" onClick={() => setModal(true)}>Reject</button>
              <button className="btn btn-success" type="submit" onClick={onSubmitApprove}>Approve</button>
              <button className="btn btn-primary">Check Details</button>
            </div>
          </div>
        </div>
        <div className='container'>{modal && <Modal setModal={setModal} ApplyLoan={ApplyLoan} />}</div>
        {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text"  className="ml-2" placeholder="Reason for Rejection" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      {/* {modal && (
        <div class="modal">
          <div onClick={toggleModal} class="overlay"></div>
          <div class="modal-content">
            <h2>Reason for Rejection</h2>
            <p> kbsckjb kb kdhk asbkdba bdwb ak</p>
            <button class='close-modal' onClick={toggleModal}>close</button>
          </div>
        </div>
      )} */}
    </>
  );
}
export default AppliedLoans;