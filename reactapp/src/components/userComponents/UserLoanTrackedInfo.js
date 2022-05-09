import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import UserRepaymentSchedule from './UserRepaymentSchedule';
import 'reactjs-popup/dist/index.css';
import '../../common/Main.css';
// import { useParams, useNavigate, NavLink } from 'react-router-dom';

const UserLoanTrackedInfo = (props) => {

    const baseURL = "http://localhost:8080";

    const [editLoanToggle, setEditLoanToggle] = useState(false);

    const [newLoanAmount, setNewLoanAmount] = useState("");
    const [newLoanRepaymentMonths, setNewLoanRepaymentMonths] = useState("");

    const [updatedLoan, setUpdatedLoan] = useState(props.loan);
    
    const [userTrackedLoanComp, setUserTrackedLoanComp] = useState(true);
    const [userRepaymentScheduleComp, setUserRepaymentScheduleComp] = useState(false);
    const [userRepaymentScheduleBtnName, setUserRepaymentScheduleBtnName] = useState("View repayment schedule");

    const [disable, setDisable] = useState(true);
    

    useEffect(() => {
        axios.get(baseURL+`/user/getLoan/`+props.loan.loanId)
            .then((response) => setUpdatedLoan(response.data))
            .catch((error) => console.log("Error occured in user loan tracked info"+ error));
        
            return () => {
                //   console.log(updatedLoan);
            }
    },)
              

    const handleUserLoanRepaymentSchedule = ()=>{
        if(userRepaymentScheduleComp){
            setUserRepaymentScheduleComp(false);
            setUserRepaymentScheduleBtnName("View repayment schedule");
        }
        else{
            setUserRepaymentScheduleComp(true);
            setUserRepaymentScheduleBtnName("Hide repayment schedule");
        }
    }

    const handleUserLoanTrackedEditBtn = () =>{
        alert("Your can edit your loan amount and repayment months");
        setDisable(false);
        setNewLoanAmount(updatedLoan.loanAmountRequired);
        setNewLoanRepaymentMonths(updatedLoan.loanRepaymentMonths);
        setEditLoanToggle(true);
    }


    const handleUserLoanTrackedUpdateBtn = () =>{
        alert("Profile updated successfully!");
        setDisable(true);
        setEditLoanToggle(false);

        let newData = {
            "loanId": props.loan.loanId,
            "applicantName": props.loan.applicantName,
            "applicantAddress": props.loan.applicantAddress,
            "applicantMobile": props.loan.applicantMobile,
            "applicantEmail": props.loan.applicantEmail,
            "applicantAadhar": props.loan.applicantAadhar,
            "applicantPan": props.loan.applicantPan,
            "applicantSalary": props.loan.applicantSalary,
            "loanAmountRequired": newLoanAmount,
            "loanRepaymentMonths": newLoanRepaymentMonths,
            "creditScore" : props.loan.creditScore,
            "currentStatus" : props.loan.currentStatus,
            "applicationDate" : props.loan.applicationDate,
            "rejectionReason" : props.loan.rejectionReason,
            "status" : props.loan.status
        }

        axios.put(baseURL+`/user/editLoan/`+props.loan.loanId, newData)
            .then((response) => {
                setUpdatedLoan(response.data);
            });
    }

    
    const handleUserLoanTrackedDeleteBtn = () =>{
            axios.delete(baseURL+`/user/deleteloanapplication/`+props.loan.loanId)
            .then(() => {
                alert("Loan application deleted successfully!");
            });
            axios.delete(baseURL+`/user/deletedocuments/`+props.loan.loanId)
            .then(() => {
                // alert("documents deleted successfully!");
                console("documents deleted successfully!");
            });
            axios.delete(baseURL+`/user/deleteRepaymentSchedule/`+props.loan.loanId)
            .then(() => {
                // alert("repayment schedule deleted successfully!");
                console("repayment schedule deleted successfully!");
            });
            window.location.reload(false);

    }              

    const handleEditLoanAmountOnChange = (e) =>{
        let newAmount = e.target.value;
        setNewLoanAmount(newAmount);
    }
    
    const handleEditLoanRepaymentMonthsOnChange = (e) =>{
        let newLoanRepayMonths = e.target.value;
        setNewLoanRepaymentMonths(newLoanRepayMonths);
    }

    
    if (props.loan.status === "pending") {
        return(
            <div className="userLoanInfoContainer" >
                <div style={{textAlign:"center" , backgroundColor:"orange"}} className="loanInfoContainerHeading" > 
                    <h3>Pending for Verification</h3> 
                </div>
                <table className='userLoanInfoTable'>
                    <tbody>
                        <tr>
                            <td style={{ "color": "black" }}>Applicant Loan Id : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.loanId} size="15" readOnly /> </td>

                            <td style={{ "color": "black" }}>Applicant Name : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.applicantName} size="15" readOnly/>  </td>
                            
                            <td style={{ "color": "black" }}>Applicant email : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.applicantEmail} size="15" readOnly /></td>
                        </tr>
                        <tr>
                            <td style={{ "color": "black" }}>Application Date : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.applicationDate} size="15" readOnly/></td>
                            
                            <td style={{ "color": "black" }}>Applicant Address : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.applicantAddress} size="15" readOnly/> </td>                                
                            
                            <td style={{ "color": "black" }}>Credit score : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' value={updatedLoan.creditScore} size="15" readOnly/> </td>                                
                        </tr>           
                        <tr>
                            <td style={{ "color": "black" }}>Applicant Salary : </td>
                            <td ><input type="text" className='userLoanInfoTableInp' value={'₹ '+updatedLoan.applicantSalary} size="15" readOnly/></td>
                            <td style={{ "color": "black" }}>Loan amount : </td>
                            <td ><input type="text" className='userLoanInfoTableInp' onChange={handleEditLoanAmountOnChange} value={editLoanToggle? newLoanAmount : updatedLoan.loanAmountRequired} size="15" />  </td> 
                            
                            <td style={{ "color": "black" }}>Loan repayment months : </td>
                            <td > <input type="text" className='userLoanInfoTableInp' onChange={handleEditLoanRepaymentMonthsOnChange} value={editLoanToggle? newLoanRepaymentMonths : updatedLoan.loanRepaymentMonths} size="15" />  </td>
                        </tr>   
                    </tbody>           
                </table>

                <div className="userLoanTrackedEditDelete">
                    <button className='userLoanTrackedEditBtn' disabled={!disable} onClick={handleUserLoanTrackedEditBtn}  >Edit</button>
                    <button className='userLoanTrackedUpdateBtn' disabled={disable} onClick={handleUserLoanTrackedUpdateBtn}>Update</button>
                    <button className='userLoanTrackedDeleteBtn' onClick={handleUserLoanTrackedDeleteBtn}>Delete</button>
                </div>
            </div>
        )
    }
    else {
        if (props.loan.status === "approved") {
            return (
                <div className="userLoanInfoContainer" >
                    <div style={{ "backgroundColor": "#26742d" }} className="loanInfoContainerHeading" >
                        APPROVED
                    </div>

                    <table className='userLoanInfoTable'>
                        <tbody>
                            <tr>
                                <td>Applicant Loan Id : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.loanId}</td>
                                <td>Applicant Name : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicantName}</td>
                                <td>Applicant Phone No. : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicantMobile}</td>
                            </tr>
                            <tr>
                                <td>Applicant Address : </td>
                                <td style={{ textAlign:"left", fontWeight:"bold" }}>{updatedLoan.applicantAddress}</td>
                                <td>Applicant Email : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicantEmail}</td>
                                <td>Applicant Salary : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>₹ {updatedLoan.applicantSalary}</td>
                            </tr>           
                            <tr>
                                <td>Applicant PAN No. : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicantPan}</td>
                                <td>Aadhar Number : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicantAadhar}</td>
                                <td>Application Date : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{updatedLoan.applicationDate}</td>
                            </tr>   
                        </tbody>
                    </table>
                    <button className="userRepaymentScheduleBtn" onClick={handleUserLoanRepaymentSchedule}>{userRepaymentScheduleBtnName}</button>
                    {
                        userRepaymentScheduleComp &&
                        <UserRepaymentSchedule loanId={props.loan.loanId} />
                        // <Repayment loanId={props.loan.loanId} />
                    }
                </div>
            );
        }
        else {
            if (props.loan.status === "rejected") {
            return (
                <div className="userLoanInfoContainer" >
                    <div style={{ "backgroundColor": "#bb0303" }} className="loanInfoContainerHeading" >
                        REJECTED
                    </div>

                    <table className='userLoanInfoTable'>
                    <tbody>
                            <tr>
                                <td>Applicant Loan Id : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.loanId}</td>
                                
                                <td>Applicant Name : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantName}</td>
                                
                                <td>Applicant Phone No. : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantMobile}</td>
                            </tr>
                            <tr>
                                <td>Applicant Address : </td>
                                <td style={{ textAlign:"left", fontWeight:"bold" }}>{props.loan.applicantAddress}</td>
                                
                                <td>Applicant Email : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantEmail}</td>
                                
                                <td>Applicant Salary : </td>
                                <td style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantSalary}</td>
                            </tr>           
                            <tr>
                                <td>Applicant PAN No. : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantPan}</td>
                                
                                <td>Aadhar Number : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicantAadhar}</td>
                                
                                <td>Application Date : </td>
                                <td  style={{ textAlign:"left" , fontWeight:"bold"}}>{props.loan.applicationDate}</td>
                            </tr>   
                        </tbody>
                    </table>             

                    <Popup trigger={<button className="userRepaymentScheduleBtn">Check details</button>}
                        // position="right center">
                        position="bottom" contentStyle={{ width: "500px" ,border: "0.5px solid #3789f3", backgroundColor: "#e1e1e1"}}>
                        <div className='rejectionReasonPopup'>
                            <h5>The reason for loan rejection is: </h5>
                            <h3>{props.loan.rejectionReason}</h3>
                        </div>
                    </Popup>
                </div>           
            );
            }
            else{
                return(
                    <div style={{textAlign:"center", fontSize:"30px", margin:"90px auto", fontWeight:"bold"}}>
                        Sorry! No such loan application exist.
                    </div>
                )
            }
        }
    }            
}

export default UserLoanTrackedInfo;





// ------------------------BACKUP CODE---------------------------

// import React from 'react';
// import { useState, useEffect } from 'react';
// import './Main.css';
// import axios from 'axios';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import { useParams, useNavigate, NavLink } from 'react-router-dom';
// import UserRepaymentSchedule from './UserRepaymentSchedule';

// const UserLoanTrackedInfo = (props) => {

//     const [loan, setLoan] = useState([]);
//     const [userTrackedLoanComp, setUserTrackedLoanComp] = useState(true);
//     const [userRepaymentScheduleComp, setUserRepaymentScheduleComp] = useState(false);


//     useEffect(() => {
//         axios.get(`http://localhost:8080/user/getLoan/${props.loanId}`)
//             .then(response => setLoan(response.data));
//         return () => {
//             // console.log(props.loan.status)
//         }
//     }, [])

//     const handleUserLoanRepaymentSchedule = () => {
//         setUserRepaymentScheduleComp(true);
//     }

//     const handleUserLoanCheckDetails = () => {
//         console.log(props.loan.rejectionReason);
//     }

//     if (props.loan.status === "null") {
//         return (
//             <div className="userLoanInfoContainer" >
//                 <div style={{ backgroundColor: "#999DA40" }} className="heading" >
//                     <h1 >Pending for Verification</h1>
//                 </div>
//             </div>
//         )
//     }
//     else {
//         if (props.loan.status === "approved") {
//             return (
//                 <div className="userLoanInfoContainer" >
//                     <div style={{ "backgroundColor": "#26742d" }} className="loanInfoContainerHeading" >
//                         Approved
//                     </div>

//                     <table className='userLoanInfoTable'>
//                         <tbody>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant Name : </td>
//                                 <td >{props.loan.applicantName}</td>
//                                 <td style={{ "color": "black" }}>Applicant Phone Number : </td>
//                                 <td >{props.loan.applicantMobile}</td>
//                                 <td style={{ "color": "black" }}>Applicant Address : </td>
//                                 <td >{props.loan.applicantAddress}</td>
//                             </tr>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant PAN Number : </td>
//                                 <td >{props.loan.applicantPan}</td>
//                                 <td style={{ "color": "black" }}>Applicant Loan Id : </td>
//                                 <td >{props.loan.loanId}</td>
//                                 <td style={{ "color": "black" }}>Applicant Salary : </td>
//                                 <td >{props.loan.applicantSalary}</td>
//                             </tr>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant Email : </td>
//                                 <td >{props.loan.applicantEmail}</td>
//                                 <td style={{ "color": "black" }}>Aadhar Number : </td>
//                                 <td >{props.loan.applicantAadhar}</td>

//                             </tr>

//                         </tbody>
//                     </table>
//                     <button className="forUserRepaymentSchedule" onClick={handleUserLoanRepaymentSchedule}>View Repayment Schedule</button>


//                     {/* <div className="grid">
//                         <div className="col">
//                             <h2>Name :</h2>
//                             <h3>{props.loan.name}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Phone Number :</h2>
//                             <h3>{state.loans.phoneNumber}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Pan Number :</h2>
//                             <h3>{state.loans.panNumber}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Address :</h2>
//                             <h3>{state.loans.address}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Loan ID :</h2>
//                             <h3>{state.loans.loanId}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Salary :</h2>
//                             <h3>{state.loans.salary}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Email ID :</h2>
//                             <h3>{state.loans.emailID}</h3>
//                         </div>
//                         <div className="col">
//                             <h2>Aadhar Card :</h2>
//                             <h3>{state.loans.aadharCard}</h3>
//                         </div>
//                     </div>
//                     <div className="dbu">
//                         <input onClick={repaymentFun} className="repay" type="submit" value="Repayment" id="repay"></input>
//                     </div> */}
//                 </div>


//             );
//         }
//         else {
//             return (
//                 <div className="userLoanInfoContainer" >
//                     <div style={{ "backgroundColor": "#f00000" }} className="loanInfoContainerHeading" >
//                         Rejected
//                     </div>

//                     <table className='userLoanInfoTable'>
//                         <tbody>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant Name : </td>
//                                 <td >{props.loan.applicantName}</td>
//                                 <td style={{ "color": "black" }}>Applicant Phone Number : </td>
//                                 <td >{props.loan.applicantMobile}</td>
//                                 <td style={{ "color": "black" }}>Applicant Address : </td>
//                                 <td >{props.loan.applicantAddress}</td>
//                             </tr>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant PAN Number : </td>
//                                 <td >{props.loan.applicantPan}</td>
//                                 <td style={{ "color": "black" }}>Applicant Loan Id : </td>
//                                 <td >{props.loan.loanId}</td>
//                                 <td style={{ "color": "black" }}>Applicant Salary : </td>
//                                 <td >{props.loan.applicantSalary}</td>
//                             </tr>
//                             <tr>
//                                 <td style={{ "color": "black" }}>Applicant Email : </td>
//                                 <td >{props.loan.applicantEmail}</td>
//                                 <td style={{ "color": "black" }}>Aadhar Number : </td>
//                                 <td >{props.loan.applicantAadhar}</td>

//                             </tr>

//                         </tbody>
//                     </table>

//                     <Popup trigger={<button className="forUserRepaymentSchedule">Check details</button>}
//                         // position="right center">
//                         position="bottom" contentStyle={{ width: "500px" , backgroundColor: "#3789f3"}}>
//                         <div className='rejectionReasonPopup'>
//                             <h5>The reason for loan rejection is: </h5>
//                             <h3 style={{ color: "white" }}>
//                                 {props.loan.rejectionReason}
//                             </h3>

//                         </div>
//                     </Popup>

//                     {/* <button className="forUserRepaymentSchedule" onClick={handleUserLoanCheckDetails}>Check details</button> */}
//                 </div>           
//             );
//         }
//     }
//     {
//         userRepaymentScheduleComp &&
//         <UserRepaymentSchedule loanId={props.loan.loanId} />
//     }
            
// }

// export default UserLoanTrackedInfo;