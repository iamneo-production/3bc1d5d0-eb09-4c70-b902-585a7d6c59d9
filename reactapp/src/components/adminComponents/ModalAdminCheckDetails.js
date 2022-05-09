import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalAdminCheckDetails = ({ setModalAdminCheckDetails, ApplyLoan, aadhar, pancard, bankStatement, payslip }) => {

    // const baseURL = "http://localhost:8080/api/auth";
    const user = JSON.parse(localStorage.getItem('user'));

    console.log("got aadhar here: "+{aadhar});
    console.log("got pancard here: "+{pancard});
    console.log("got bankstatement here: "+{bankStatement});
    console.log("got payslip here: "+{payslip});
    
    axios.get(`${aadhar}`,  { headers: {"Authorization" : `Bearer `+ user.accessToken} } )
      .then((res) =>{
          console.log("aadhar image returned here now---- : "+res.data);
      })
      .catch((error) =>{
        console.log(`aadhar files is here:  + ${aadhar} `);
      })

     return (
        <div>
            <div className="modalAdminCheckDetails">
                <div className="overlayAdminCheckDetails">
                    <div className="modal-contentACD bg-white rounded p-8 m-8 max-w-xs max-h-full text-center overflow-y-auto">
                        
                        <div className="mt-8 space-y-6">
                            <div className='h-20  ml-10'>
                                <h4>Details of the Loan</h4>
                                <table className="adminLoanCheckDetails">

                                    <tbody>
                                        <tr><td>LoanId:</td><td> {ApplyLoan.loanId}</td></tr>
                                        <tr><td>Applicant Name:</td><td> {ApplyLoan.applicantName}</td></tr>
                                        <tr><td>Applicant Email:</td><td> {ApplyLoan.applicantEmail}</td></tr>
                                        <tr><td>Applicant Mobile:</td><td> {ApplyLoan.applicantMobile}</td></tr>
                                        <tr><td>Applicant Address:</td><td> {ApplyLoan.applicantAddress}</td></tr>
                                        <tr><td>Applicant Salary:</td><td> {'₹ '+ApplyLoan.applicantSalary}</td></tr>
                                        <tr><td>Application Date:</td><td> {ApplyLoan.applicationDate}</td></tr>
                                        <tr><td>Applicant Credit Score:</td><td> {ApplyLoan.creditScore}</td></tr>
                                        <tr><td>Applicant Aadhar No.:</td><td> {ApplyLoan.applicantAadhar}</td></tr>
                                        <tr><td>Applicant PAN:</td><td> {ApplyLoan.applicantPan}</td></tr>
                                        <tr><td>Applicant Loan amount:</td><td> {'₹ '+ApplyLoan.loanAmountRequired}</td></tr>
                                        <tr><td>Loan repayment months:</td><td> {ApplyLoan.loanRepaymentMonths}</td></tr>
                                    </tbody>
                                </table>
                                <hr />
                                <h6>Documents:</h6>
                                <div className="adminCheckDetailsDocuments">
                                    {/* <button onClick={viewDocumentsHandler}>View documents</button> */}
                                    
                                    <div>
                                        <h6>Aadhar Card</h6> 
                                        <img src= {aadhar} alt="addhar card " />
                                    </div>
                                    <div>
                                        <h6>PAN</h6> 
                                        <img src= {aadhar} alt="PAN " />
                                    </div>
                                    <div>
                                        <h6>Bank Statement</h6> 
                                        <img src= {aadhar} alt="Bank statement " />
                                    </div>
                                    <div>
                                        <h6>Pay-slip</h6> 
                                        <img src= {aadhar} alt="pay slip " />
                                    </div>
                                    
                        

                                </div>
                            </div>

                            <div className="flex justify-between gap-4">
                                <button
                                    onClick={() => setModalAdminCheckDetails(false)}
                                    type='button'
                                    className="group relative w-full mt-2 ms-1 rounded-3 flex justify-center py-2 px-4 border border-transparent text-sm btn-danger">
                                    Close
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalAdminCheckDetails;





// ORIGINAL CODE

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ModalAdminCheckDetails = ({ setModalAdminCheckDetails, ApplyLoan }) => {

//     const baseURL = "http://localhost:8080/api/auth";

//     const [files, setFiles] = useState([])

//     const did= ApplyLoan.loanId;

//     const getfiles = () => {
//         axios.get(baseURL + `/documents/`+ did).then((res) => {
//             console.log(res);
//             setFiles(res.data);
//         }, (e) => { console.log(e) })
//     }


//     useEffect(() => {
//         getfiles()
//     }, [])

//     return (
//         <div>
//             <div className="modalAdminCheckDetails">
//                 <div className="overlayAdminCheckDetails">
//                     <div className="modal-contentACD bg-white rounded p-8 m-8 max-w-xs max-h-full text-center overflow-y-auto">
                        
//                         <div className="mt-8 space-y-6">
//                             <div className='h-20'>
//                                 <h4>Details of the Loan</h4>
//                                 <table className="adminLoanCheckDetails">

//                                     <tbody>
//                                         <tr><td>LoanId:</td><td> {ApplyLoan.loanId}</td></tr>
//                                         <tr><td>Applicant Name:</td><td> {ApplyLoan.applicantName}</td></tr>
//                                         <tr><td>Applicant Email:</td><td> {ApplyLoan.applicantEmail}</td></tr>
//                                         <tr><td>Applicant Mobile:</td><td> {ApplyLoan.applicantMobile}</td></tr>
//                                         <tr><td>Applicant Address:</td><td> {ApplyLoan.applicantAddress}</td></tr>
//                                         <tr><td>Applicant Salary:</td><td> {ApplyLoan.applicantSalary}</td></tr>
//                                         <tr><td>Application Date:</td><td> {ApplyLoan.applicationDate}</td></tr>
//                                         <tr><td>Applicant Credit Score:</td><td> {ApplyLoan.creditScore}</td></tr>
//                                         <tr><td>Applicant Aadhar No.:</td><td> {ApplyLoan.applicantAadhar}</td></tr>
//                                         <tr><td>Applicant PAN:</td><td> {ApplyLoan.applicantPan}</td></tr>
//                                         <tr><td>Applicant Loan amount:</td><td> {ApplyLoan.loanAmountRequired}</td></tr>
//                                         <tr><td>Loan repayment months:</td><td> {ApplyLoan.loanRepaymentMonths}</td></tr>
//                                     </tbody>
//                                 </table>
//                                 <hr />
//                                 <h6>Documents:</h6>
//                                 <div className="adminCheckDetailsDocuments">
//                                     <button className="adminDocumentViewBtn" onClick={(e) => {
//                                         e.preventDefault();
//                                         window.open(`${files.aadhar}`)
//                                     }}>Click here to view the Aadhaar Card</button>

//                                     <button className="adminDocumentViewBtn" onClick={(e) => {
//                                         e.preventDefault();
//                                         window.open(`${files.pan}`)
//                                     }}>Click here to view the PAN</button>

//                                     <button className="adminDocumentViewBtn" onClick={(e) => {
//                                         e.preventDefault();
//                                         window.open(`${files.bankStatement}`)
//                                     }}>Click here to view the Bank statement</button>

//                                     <button className="adminDocumentViewBtn" onClick={(e) => {
//                                         e.preventDefault();
//                                         window.open(`${files.paySlip}`
//                                         )
//                                     }}>Click here to view the Pay-slip</button>

//                                 </div>
//                             </div>

//                             <div className="flex justify-between gap-4">
//                                 <button
//                                     onClick={() => setModalAdminCheckDetails(false)}
//                                     type='button'
//                                     className="group relative w-full mt-2 ms-1 rounded-3 flex justify-center py-2 px-4 border border-transparent text-sm btn-danger">
//                                     Close
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ModalAdminCheckDetails;