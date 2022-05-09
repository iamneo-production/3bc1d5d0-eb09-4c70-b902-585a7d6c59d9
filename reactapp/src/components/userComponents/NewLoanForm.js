import React, { useState, useEffect } from "react";
import axios from 'axios'
import ApplyLoan from "./ApplyLoan";
import UploadDocuments from "./UploadDocuments";
import LoanSubmit from "./LoanSubmit";
import { NavigationType, useNavigate } from "react-router-dom"
import NewLoanFormFileList from "./NewLoanFormFileList";
import '../../common/Main.css'
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

function NewLoanForm() {

    const baseURL = "http://localhost:8080";

    const user = JSON.parse(localStorage.getItem('user'));

    const [returnedId, setReturnedId] = useState(0);

    const [page, setPage] = useState(0);
    const [documents, setdocuments] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const FormTitles = ["ApplyLoan", "UploadDocuments"];
    const [docs, setDocs] = useState([]);

    const navigate = useNavigate();

    // status : pending /approved /rejected
    // currentStatus : pending /ongoing /paid /rejected 
    const [values, setValues] = useState({
        applicantAadhar: '',
        applicantAddress: '',
        applicantEmail: '',
        applicantMobile: '',
        applicantName: '',
        applicantPan: '',
        applicantSalary: '',
        creditScore: '',
        currentStatus: 'pending',
        loanAmountRequired: '',
        loanRepaymentMonths: '',
        status: 'pending',
        userId: user.id,
        // DocumentType: ''
    })


    const removeFile = (documentname) => {
        setdocuments(documents.filter(document => document.value.name !== documentname))
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <ApplyLoan values={values} setValues={setValues} formErrors={formErrors} />;
        }
        else if (page === 1) {
            return (<div><UploadDocuments values={values} setValues={setValues} documents={documents} setdocuments={setdocuments} formErrors={formErrors} removeFile={removeFile} />;
                <NewLoanFormFileList documents={documents} removeFile={removeFile}></NewLoanFormFileList>
            </div>)
        }
    };

    const nav = (event) => {
        setFormErrors(validate(values, documents));
        documents.map((r) => {
            // console.log(r.value.name) 
        })

        if (page === 1) {
            setIsSubmit(true)
        }
        else {
            setIsSubmit(false)
        }
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {

            // console.log(values);
            // console.log(documents)

            setDocs([...docs, docs[0] = documents.find(o => o.id === 'Aadhar Card').value])
            setDocs([...docs, docs[1] = documents.find(o => o.id === 'PAN').value])
            setDocs([...docs, docs[2] = documents.find(o => o.id === 'Bank Statement').value])
            setDocs([...docs, docs[3] = documents.find(o => o.id === 'Pay-Slip').value])

            let file = documents;
            let formdata = new FormData()

            formdata.append("docs", docs[0])
            formdata.append("docs", docs[1])
            formdata.append("docs", docs[2])
            formdata.append("docs", docs[3])

            // console.log(formdata)
            // console.log(docs)

            //For adding loan
            axios.post(baseURL + `/user/addLoan`, values).then(res => {
                setReturnedId(res.data);
                navigate("/userhomepage/submit", { state: { info: res.data } });
                // toast.success("You have successfully Applied for the loan", { position: "bottom-center" })
                // console.log("axios.post fot adding loan- res: "+ res.data);
            },
                (error) => {
                    console.log(error);
                    navigate("/userhomepage/submit", { state: { info: error } });
                    alert(error);
                });

            //for adding documents
            axios.post(baseURL + `/user/addDocuments`, formdata)
                .then(res => {
                    // console.log(res.data);
                },
                    (error) => {
                        alert(error);
                    })


            //for adding repayment
            axios.post(baseURL + `/user/generateRepaymentSchedule`, values)
                .then((res) => {
                    console.log("Repayment model created!");
                })
                .catch((error) => {
                    console.log("Error occured while creating Repayment model!");
                });

        }
    }, [formErrors]);


    const validate = (value, documents) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!value.applicantName) {
            errors.applicantName = "Applicant Name is required!";
        }
        if (!value.applicantAddress) {
            errors.applicantAddress = "Applicant address is required!"
        }
        if (!value.applicantMobile) {
            errors.applicantMobile = "Mobile number is required!"
        } else if (value.applicantMobile.length < 10 || value.applicantMobile.length > 10) {
            errors.applicantMobile = "Mobile no. must be 10 digits!"
        }
        if (!value.applicantEmail) {
            errors.applicantEmail = "Email id is required!";
        } else if (!regex.test(value.applicantEmail)) {
            errors.applicantEmail = "This is not a valid email format!";
        }
        if (!value.applicantAadhar) {
            errors.applicantAadhar = "Aadhar number is required!";
        }
        if (!value.applicantPan) {
            errors.applicantPan = "PAN is required!";
        }
        if (!value.applicantSalary) {
            errors.applicantSalary = "Applicant salary is required!"
        }
        if (!value.creditScore) {
            errors.creditScore = "Credit Score is required!"
        }
        if (!value.loanAmountRequired) {
            errors.loanAmountRequired = "Loan Amount required!"
        }
        if (!value.loanRepaymentMonths) {
            errors.loanRepaymentMonths = "Loan repayment months required!"
        }
        if (page === FormTitles.length - 1) {
            if (Object.keys(documents).length !== 4) {
                errors.docs = "Please Upload all the documents!"
                // console.log(errors)
                // console.log(Object.keys(documents).length)
            }
        }
        if (Object.keys(errors).length === 0) {
            setPage((currPage) => currPage + 1);
        }
        else if (Object.keys(errors).length !== 0) {
            // toast.error("Please Fill all the fields correctly", { position: "bottom-center" })
        }
        return errors;
    };

    return (
        <div className="loanFormBody">

            <div className="progressbar">
                <div style={{ width: page === 0 ? "50%" : "100%" }}>
                    <div className="progressbarText">Page {page + 1} of 2</div>
                </div>
            </div>

            <div className="body" >{PageDisplay()}</div>

            <div className="footer">
                <button
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                    className="buttons"
                >
                    Previous
                </button>
                <button className="buttons" id="applyLoanButton"
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            nav()
                        } else {
                            nav()
                        }
                    }
                    }
                >
                    {/* {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )} */}
                    {page === FormTitles.length - 1 ? "Apply for Loan" : "Next"}
                </button>

            </div>
        </div>

    )
}

export default NewLoanForm