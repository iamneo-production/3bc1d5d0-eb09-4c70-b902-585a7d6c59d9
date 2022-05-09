import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLoanDetails from "./AdminLoanDetails";
import { NavigationType, useNavigate } from "react-router-dom"
import AdminLoanRepaymentSchedule from "./AdminLoanRepaymentSchedule";
import AdminGeneratedReport from "./AdminGeneratedReport";


const LoansAfterDecision = () => {

    const baseURL = "http://localhost:8080";

    const [lid, setLid] = useState(false);
    const [loid, setLoid] = useState("");

    const [loanDetails, setLoanDetails] = useState([]); 
    const [actualLoanId, setActualLoanId] = useState();
    const [Loans, setLoans] = useState([]);

    const [adminLoanDetailsDisplay, setAdminLoanDetailsDisplay] = useState(true);
    const [adminLoanDetailsRepayment, setAdminLoanDetailsRepayment] = useState(false);
    const [adminLoanDetailsGeneratedReport, setAdminLoanDetailsGeneratedReport] = useState(false);

    useEffect(() => {

        axios.get(baseURL + `/admin/getAllLoans`).then(
            (Response) => {
                setLoans(Response.data);
                console.log(Response.data);
            },
            (error) => {
                // toast.error("something went wrong", {position: "Top-center"});
                console.log(error);
            }
        );
    }, []);

    const onSubmit = () => {
        axios.get(baseURL + `/admin/getLoan/${loid}`)
            .then((res) => {
                setLoanDetails(res.data);
                console.log("LoanDetails: " + res.data);
                setLid(true);
            })
            .catch((error) => {
                setLid(false)
                console.log("No such loans found broo!");
                alert("No such loan found!");
            }
            );
    }

    const checkId = (e) => {
        const loid = e.target.value;
        setLoid(loid);
    }


    const navigate = useNavigate();

    const handleAdminRepaymentSchedule = () => {
        setAdminLoanDetailsDisplay(false);
        setAdminLoanDetailsRepayment(true);
        setActualLoanId(loid);
    }
    
    const handleAdminGenerateReport = () => {
        setAdminLoanDetailsDisplay(false);
        setAdminLoanDetailsGeneratedReport(true);
        setActualLoanId(loid);
    }


    return (
        <>
            {adminLoanDetailsDisplay &&

                <div style={{ marginBottom: "50px" }}>
                    <div>
                        <div className="adminLoanDetailSearch">
                            <h5 style={{ "textAlign": "center" }}>Enter the loan id: </h5>
                            <input type="text" className="adminLoanDetailsSearchInp" onChange={checkId} placeholder="Enter the loan Id" />
                            <button className="adminLoanDetailsSearchBtn" onClick={onSubmit} type="submit">Search</button>
                        </div>
                        <hr />
                        <div>{lid &&
                            <div>
                                <div className="admin-card-horizontal">
                                    <div className="lol row g-0">
                                        <div>
                                            <h3 className="cardText1">{loanDetails.status}</h3>
                                        </div>
                                        <div className="col-md-6">
                                            <span className="cardText">Name : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.applicantName}</span></span>

                                            <span className="cardText">Phone : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.applicantMobile}</span></span>

                                            <span className="cardText">Email : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.applicantEmail}</span></span>

                                            <span className="cardText">Aadhar number : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.applicantAadhar}</span></span>

                                        </div>
                                        <div className="col-md-6">
                                            <span className="cardText">Pan number : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.applicantPan}</span></span>

                                            <span className="cardText">Salary : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{'₹ ' + loanDetails.applicantSalary}</span></span>

                                            <span className="cardText">Loan Amount Required : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{'₹ ' + loanDetails.loanAmountRequired}</span></span>

                                            <span className="cardText">Loan Repayment Months : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.loanRepaymentMonths}</span></span>
                                        </div>
                                        <div>
                                            {loanDetails.status === "approved" &&
                                                <div className='text-center' >
                                                    <button className="aladBtn1" onClick={handleAdminRepaymentSchedule}>View repayment schedule</button>
                                                    <button className="aladBtn2" onClick={handleAdminGenerateReport}>Generate reports</button>
                                                </div>
                                            }
                                            {
                                                loanDetails.status === "rejected" &&
                                                <span className="cardText">Reason for Rejection : <span style={{ fontWeight: "bold", marginLeft: "10px", display: "inline" }}>{loanDetails.rejectionReason}</span></span>
                                            }
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>   
                    {lid === false &&
                        <div>
                            {Loans.length > 0 ? Loans.map((item) =>
                                <AdminLoanDetails key={item.id} LoanDetail={item} 
                                setActualLoanId={setActualLoanId} setAdminLoanDetailsDisplay={setAdminLoanDetailsDisplay} setAdminLoanDetailsRepayment={setAdminLoanDetailsRepayment} setAdminLoanDetailsGeneratedReport={setAdminLoanDetailsGeneratedReport} />)
                                :
                                <div style={{ textAlign: "center", fontSize: "30px" }}>
                                    Hurray! All loans are cleared.
                                </div>
                            }
                        </div>
                    }

                </div>
            }
 
            {
                adminLoanDetailsRepayment &&

                <AdminLoanRepaymentSchedule loanId={actualLoanId} />
            }

            {
                adminLoanDetailsGeneratedReport &&

                <AdminGeneratedReport loanId={actualLoanId}/>
            }

        </>
    );

}

export default LoansAfterDecision;