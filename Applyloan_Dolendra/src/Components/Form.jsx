import React, { useState, useEffect  } from "react";
import axios from 'axios'
import Applyloan from "./Applyloan";
import  './css/Main.css'
import UploadDocuments from "./UploadDocuments";
import Submit from "./Submit";
import { NavigationType, useNavigate } from "react-router-dom"
import baseurl from "../api/bootapi";
import FileList from "./FileList";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Form() {
    const [page, setPage] = useState(0);
    const [documents, setdocuments] = useState([]);
let navigate = useNavigate();
//const[documents,setDocuments]=useState()
    const [values,setValues] = useState({
        applicantName:'',
        applicantAddress:'',
        applicantMobile : '',
        applicantEmail :'',
        applicantAadhar : '',
        applicantPan :'',
        applicantSalary : '',
        applicantCreditScore :'',
        loanAmountRequired :'',
        loanRepaymentMonths :'',
        DocumentType : '',
        //Document : []
        // Document1 : '',
        // Document2 : '',
        // Document3 : '',
        // Document4 : ''
        
      })

     const [docs,setDocs] = useState([
      //  aadhar:'',
      //  pan:'',
      //  bankStatements:'',
      //  paySlip :''

     ])
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSave,setisSave]=useState(false)
    const FormTitles = ["ApplyLoan","UploadDocuments"];

    const removeFile = (documentname)=>{
       setdocuments(documents.filter(document=>document.value.name !== documentname))
    }

    const PageDisplay = () => {
        if (page === 0) {
          return <Applyloan values={values} setValues={setValues} formErrors={formErrors} />;
        }
         else if(page === 1) {
          return (<div><UploadDocuments values={values} setValues={setValues} documents={documents} setdocuments={setdocuments} formErrors={formErrors} removeFile={removeFile} />;
        <FileList documents={documents} removeFile={removeFile}></FileList>
         </div>)}
      };

      const nav =(event) =>{
        setFormErrors(validate(values,documents));
        documents.map((r)=>{console.log(r.value.name)})
        
        if(page===1){setIsSubmit(true)
        //setDocs({...docs,aadhar:documents.find(o=>o.id==='aadhar').value,pan:documents.find(o=>o.id==='pan').value,bankStatements:documents.find(o=>o.id==='bankStatements').value,paySlip:documents.find(o=>o.id==='paySlip').value})
      }
        else{
          setIsSubmit(false)
        }     
      }

      useEffect(() => {
        
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(documents.find(o=>o.id==='aadhar').value)
          console.log(values);
         console.log(documents)
         setDocs([...docs,docs[0]=documents.find(o=>o.id==='aadhar').value])
         setDocs([...docs,docs[1]=documents.find(o=>o.id==='pan').value])
         setDocs([...docs,docs[2]=documents.find(o=>o.id==='bankStatements').value])
         setDocs([...docs,docs[3]=documents.find(o=>o.id==='paySlip').value])
           navigate("/Submit");
           toast.success("You have successfully Applied for the loan",{position : "bottom-center"})
           let file = documents
      //let type = values.DocumentType
      let formdata = new FormData()
      formdata.append("docs",docs[0])
      formdata.append("docs",docs[1])
       formdata.append("docs",docs[2])
       formdata.append("docs",docs[3])
      console.log(formdata)
     // setDocs({...docs,aadhar:documents.find(o=>o.id==='aadhar').value,pan:documents.find(o=>o.id==='pan').value,bankStatements:documents.find(o=>o.id==='bankStatements').value,paySlip:documents.find(o=>o.id==='paySlip').value})
     // setDocs({...docs,aadhar:documents.find(o=>o.id==='aadhar').value,pan:documents[1].value,bankStatements:documents[2].value,paySlip:documents[1].value})
      console.log(docs)
      //formdata.append('DocumentsData',file)
      // formdata.append('Pan',file[1])
      // formdata.append('Bank Statements',file[2])
      // formdata.append('Pay Slip',file[3])
     // formdata.append('PersonalData',values)
       console.log(documents[0].value)
      axios.post(`${baseurl}/user/addLoan`,values).then(res =>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      })

      axios.post(`${baseurl}/user/adddocs`,formdata).then(res =>{
        console.log(res)
      },
      (error)=>{
        console.log(error)
      })
      
        }
      }, [formErrors]);


      const validate = (value,documents) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!value.applicantName) {
          errors.applicantName = "Applicant Name is required!";
        }
        if(!value.applicantAddress){
          errors.applicantAddress = "Address is required"
        }
        if(!value.applicantMobile){
          errors.applicantMobile = "Mobile number is required"
        }else if(value.applicantMobile.length < 10 ||value.applicantMobile.length >10) {
          errors.applicantMobile = "Mobile no must be 10 numbers"
        }
        if (!value.applicantEmail) {
          errors.applicantEmail = "Email is required!";
        } else if (!regex.test(value.applicantEmail)) {
          errors.applicantEmail = "This is not a valid email format!";
        }
        if (!value.applicantAadhar) {
          errors.applicantAadhar = "Aaadhar number is required";
        // } else if (value.Aaadharno.length < 4) {
        //   errors.Aaadharno = "Aaadharno must be more than 4 characters";
        // } else if (value.Aaadharno.length > 10) {
        //   errors.Aaadharno = "Aaadharno cannot exceed more than 10 characters";
        }if (!value.applicantPan) {
          errors.applicantPan = "pan number is required";
        }
        if(!value.applicantSalary){
          errors.applicantSalary = "salary is required"
        }
        if(!value.applicantCreditScore){
          errors.applicantCreditScore = "Credit Score is required"
        }
        if(!value.loanAmountRequired){
          errors.loanAmountRequired="Loan Amount required"
        }
        if(!value.loanRepaymentMonths){
          errors.loanRepaymentMonths ="Loan repayment months required"
        }
        if(page === FormTitles.length - 1 ){
        if(Object.keys(documents).length!==4){
            errors.docs = "Please Upload all the documents"
            console.log(errors)
          console.log(Object.keys(documents).length)
        }
        
        console.log("hi")
      }
      if(Object.keys(errors).length === 0 ){
          setPage((currPage) => currPage + 1);
          }
      else if(Object.keys(errors).length !== 0 ){
        toast.error("Please Fill all the fields correctly",{position : "bottom-center"})
      }
        return errors;
      };








  //     const buttons=()=>{
  //       if (page === FormTitles.length - 1) {
  //         // alert("You have Successfully applied for the loan");
  //          // const nav =
  //          (event) =>{
  //     navigate("/Submit")
  // //      //event.preventDefault()
  //  }
  //         // console.log(formData);
  //       } else {
  //         setPage((currPage) => currPage + 1);
  //       }

  //     }
 
      return (
    <div className="form">
        <div className="progressbar">
        <div
          style={{ width: page === 0 ? "50%" : "100%" }}
        >
          <div>
                <h5 style={{marginTop :"0px"}}>{page
                +1} of 2</h5>
            </div>   
        </div>
      </div>
     
    <div className="body" >{PageDisplay()}</div>

        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="button"
          >
            Previous
          </button>
           {/* <button onClick={()=>{setFormErrors(validate(values)); }}>Save</button> */}
          <button className="button" 
          // formErrors.Aname || formErrors.Aaddress||formErrors.Amobile||formErrors.Aemailid||formErrors.Aaadharno||formErrors.Apanno||formErrors.Asalary||formErrors.Acreditscore||formErrors.loanamountrequired||formErrors.loanrepaymentmonths||!values.Aname || !values.Aaddress||!values.Amobile||!values.Aemailid||!values.Aaadharno||!values.Apanno||!values.Asalary||!values.Acreditscore||!values.loanamountrequired||!values.loanrepaymentmonths
             onClick={
              () => {
              if (page === FormTitles.length - 1) {
                // alert("You have Successfully applied for the loan");
                 nav()
                 
                 //console.log(values);
              } else {
                nav()
                // if(Object.keys(formErrors).length === 0){
                // setPage((currPage) => currPage + 1);
                // }
              }
            }
          }
          >
            {page === FormTitles.length - 1 ? "Apply for Loan" : "Next"}
          </button>
         
        </div>
      </div>
    
  )
}

export default Form