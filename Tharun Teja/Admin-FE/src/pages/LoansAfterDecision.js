import React, { useEffect, useState } from "react";
import axios from "../Api/bootapi";
import LoanDetails from "./LoanDetails";
import { toast } from "react-toastify";


const LoansAfterDecision = () => {


    const [lid, setLid] = useState(false);
    const [loid, setLoid] = useState("");
    const [LoanD, setLoanD] = useState([0]);

    const checkId = (e) => {
        const loid = e.target.value;
        setLoid(loid);
        // console.log(loid);
        // console.log(Loans);
        // const data = Loans.filter((l) => l.loanId == loid);
        // console.log(data);
        // axios.get(`/admin/getloanapplication/${loid}`).then(
        //     (Response) => {
        //         setLoanD(Response.data);
        //         console.log(Response.data);
        //     }
        // );
        // console.log(LoanD);
        // setLoanD(Loans.filter((l) => l.loanId == loid));
        // console.log(LoanD);
        
    }


    const onSubmit = () => {
        // axios.get(`/admin/getloanapplication/${loid}`);
        axios.get(`/admin/getloanapplication/${loid}`).then(
            (Response) => {
                setLoanD(Response.data);
                console.log(Response.data);
            }
        );
        setLid(true);
    }

    const getAllLoansAfterDecision = () => {

        // const con=Loans.LoanDetail.status;

        axios.get(`/admin/getAllLoanDetails`).then(
            (Response) => {
                setLoans(Response.data);
                console.log(Response.data);
                // console.log(con);
                // console.log("hello");
                toast.success("courses has been loaded", {
                    position: "botton-center",
                });
            },
            (error) => {
                toast.error("something went wrong", {
                    position: "Top-center"
                });
                console.log(error);
                // console.log("hello2");
            }
        );
    };


    useEffect(() => {
        getAllLoansAfterDecision();
    }, []);

    const [Loans, setLoans] = useState([0]);

    return (
        <div>
            {/* <h1>All Loans</h1> */}
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={checkId} placeholder="Loan Id" aria-label="user's LoanId" />
                    <button class="btn btn-primary" onClick={onSubmit} type="submit" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                </div>
                <div>{lid &&
                    <div>
                        <div class="card-horizontal">
                            <div class="lol row g-0">
                                <div>
                                    <h3 class="cardText1 text-uppercase">{LoanD.status}</h3>
                                </div>
                                <div class="col-md-4">
                                    {/* <h6 class="cardSubtitle text-center fw-bold"> </h6> */}
                                    <p class="cardText">Name : {LoanD.name}</p>
                                    <p class="cardText">Phone : {LoanD.phone}</p>
                                    <p class="cardText">Email : {LoanD.email}</p>
                                    <p class="cardText">Aadhar number : {LoanD.aadhar_no}</p>

                                </div>
                                <div class="col-md-4">
                                    <p class="cardText">Pan number : {LoanD.pan_no}</p>
                                    <p class="cardText">Salary : {LoanD.salary}</p>
                                    <p class="cardText">Loan Amount Required : {LoanD.loanAmountRequired}</p>
                                    <p class="cardText">Loan Repayment Months : {LoanD.loanRepaymentMonths}</p>
                                </div>
                                <div>
                                    {LoanD.status === "approved" &&
                                        <div className='text-center' >
                                            <button className="btn btn-warning">View repayment schedule</button>
                                            <button className="btn btn-danger">Generate reports</button>
                                        </div>
                                    }
                                    {
                                        LoanD.status === "rejected" &&
                                        <p class="cardText">Reason for Rejection : {LoanD.reasonForRejection}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }</div>
            </div>
            {lid === false &&
                <div>
                    {Loans.length > 0 ? Loans.map((item) =>
                        <LoanDetails key={item.id} LoanDetail={item} />)
                        : "No Applications are recently taken decision"}
                </div>
            }

        </div>
    );

}

export default LoansAfterDecision;