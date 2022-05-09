import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {

    const baseURL = "http://localhost:8080";

    const userinfo = JSON.parse(localStorage.getItem('user'));
    let loanId = localStorage.getItem('loanId');                
    
    const [upLoanToggle, setUpLoanToggle] = useState(false);
    const [user, setUser] = useState([]);
    const [loan, setLoan] = useState([]);
    const [repayment, setRepayment] = useState([]);
    const [newAddress, setNewAddress] = useState();
    const [disable, setDisable] = useState(true);


    useEffect(() => {
        axios.get(baseURL + `/user/getProfile/` + userinfo.id)
            .then((response) => setUser(response.data))
            .catch((error) => console.log("Error occured in profile: " + error));

        // axios.get(baseURL + `/getLoan/` + (userinfo.id-1))
        axios.get(baseURL + `/user/getLoan/` + (loanId))
            .then((response) => {
                setLoan(response.data);
                setNewAddress(loan.applicantAddress)
            })
            .catch((error) =>
                console.log("Error occured in user profile: " + error));
        
        axios.get(baseURL + `/user/getRepaymentSchedule/` + (localStorage.getItem('loanId')))
            .then((response) => {
                setRepayment(response.data);
            })
            .catch((error) =>
                console.log("Error occured in user profile: " + error));
    }, []);

    const handleAddressChange = e => {
        let address = e.target.value;
        setNewAddress(address);
    };

    function handleEditProfile(e) {
        alert("You can edit profile now!");
        setUpLoanToggle(true);
        setDisable(false);
        setNewAddress(loan.applicantAddress);
    }


    function handleUpdateProfile() {
        console.log("Update profile button clicked!");
        alert("Profile updated successfully!");
        setDisable(true);
        setUpLoanToggle(false);
        // setLoading(true);

        let newData = {
            "loanId": loan.loanId,
            "applicantName": loan.applicantName,
            "applicantAddress": newAddress,
            "applicantMobile": loan.applicantMobile,
            "applicantEmail": loan.applicantEmail,
            "applicantAadhar": loan.applicantAadhar,
            "applicantPan": loan.applicantPan,
            "applicantSalary": loan.applicantSalary,
            "loanAmountRequired": loan.loanAmountRequired,
            "loanRepaymentMonths": loan.loanRepaymentMonths,
            "creditScore": loan.creditScore,
            "currentStatus": loan.currentStatus,
            "applicationDate": loan.applicationDate,
            "rejectionReason": loan.rejectionReason,
            "status": loan.status
        }

        axios.put(`${baseURL}/user/editProfile/`+(userinfo.id-1), newData)
            .then((response) => {
                setLoan(response.data);
                console.log("profile updated successfully");
            });
    }

    function handleDeleteProfile() {
        if (loan.currentStatus === "returned") {
            alert("Your profile has been deleted successfully!");

        }
        else if (loan.currentStatus === "ongoing") {
            alert("Sorry! You have a Loan to return.");
        }
        else {
            alert("Sorry! You have a Loan to return.");

        }
    }

    return (
        <div>
            {/* <hr /> */}
            <div className="profileInfoContainer">
                <div className='profileHeading'>Profile Information</div>
                <table className='profileTable'>
                    <tbody>
                        <tr>
                            <td>Name : </td>
                            <td><input id="name" className="profileInp" value={loan.applicantName? (loan.applicantName) : "Unavailable"} size="20" readOnly /></td>
                            
                            <td>Loan ID : </td>
                            <td><input id="loanId" className="profileInp" value={loan.loanId? (loan.loanId) : "Unavailable"} size="20" readOnly /></td>
                            
                            <td>Mobile : </td>
                            <td><input id="mobileNo" className="profileInp" value={loan.applicantMobile? (loan.applicantMobile) : "Unavailable"} size="20" readOnly /></td>
                        </tr>    
                        <tr>
                            <td>Email : </td>
                            <td><input id="email" className="profileInp" value={user.email} size="20" readOnly /></td>
                            
                            <td>User-name : </td>
                            <td><input className="profileInp" value={user.username} size="20" readOnly /></td>
                            
                            <td>Salary :</td>
                            {/* <td><input className="profileInp" value={'₹ '+loan.applicantSalary} size="20" /></td> */}
                            <td><input className="profileInp" value={loan.applicantSalary? ('₹ '+loan.applicantSalary) : "Unavailable"} size="20" readOnly /></td>
                        </tr>
                        <tr>
                            <td>Credit Score : </td>
                            <td><input className="profileInp" value={loan.creditScore? ('₹ '+loan.applicantSalary) : "Unavailable"} size="20" readOnly /></td>
                            
                            <td>Address : </td>
                            <td><input id="address" className='profileInp' value={upLoanToggle ? newAddress : (loan.applicantAddress ? loan.applicantAddress: "Unavailable") } size="20" onChange={handleAddressChange} /></td>
                            {/* <td><input className='profileInp' value={upLoanToggle ? newAddress : loan.applicantAddress} size="20" onChange={handleAddressChange} /></td> */}
                            
                            <td>Monthly EMI : </td>                            
                            {/* <td><input className="profileInp" value={'₹ '+repayment.installmentDue} size="20" readOnly /></td> */}
                            <td><input id="monthlyemi" className="profileInp" value={repayment.installmentDue? ('₹ '+repayment.installmentDue) : "Unavailable"} size="20" readOnly /></td>
                        </tr>
                    </tbody>
                </table>

                <div className="profileActionBtns">

                    <button className='profileActionBtn' style={{ backgroundColor: "#0064ff" }} onClick={handleEditProfile} disabled={!disable} > Edit Profile</button>

                    <button className='profileActionBtn' style={{ backgroundColor: "#068007" }} onClick={handleUpdateProfile} disabled={disable}>
                        <span>Update Profile</span>
                    </button>

                    <button className='profileActionBtn' style={{ backgroundColor: "#c80022" }} onClick={handleDeleteProfile} >Delete Profile</button>
                </div>

            </div>
        </div>
    )
}
