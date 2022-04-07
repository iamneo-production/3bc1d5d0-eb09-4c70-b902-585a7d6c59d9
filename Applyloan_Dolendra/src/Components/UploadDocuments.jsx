import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Select from 'react-select';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UploadDocuments({values,setValues,documents,setdocuments,formErrors}) {

  //var uploads 

  var fileslist=[
    {value : "aadhar",
     label:"Aadhar"},
     {value : "pan",
     label:"Pan"},
     {value : "bankStatements",
     label:"Bank Statements"},
     {value : "paySlip",
     label:"PaySlip"}
  ]

//const [documents, setdocuments] = useState([]);


const handleDocumentType =(event) =>{
  //console.log(values.DocumentType)
    setValues({...values,DocumentType:event.value})
    //console.log(values.DocumentType)
}

// const handleChange =(event)=>{
//    uploads = event.target.files[0]
//   console.log(uploads)
// }


const handleDocument =(event) =>{
 // var a = uploads
 let uploads = event.target.files[0]
  event.preventDefault()
  let type = values.DocumentType
  //let uploads = a
  //console.log(documents)
  console.log(type)
  console.log(uploads)
  if(type && uploads){
      setdocuments([...documents,{
        id :type,
        value : uploads
      }])

}
}

    // const handleDocument =(event) =>{
    //   let type = values.DocumentType
    //   let uploads = event.target.files[0]
    //   // setValues({...values,Document:event.target.value})
    //   //console.log(event.target.files[0])
    //   //setdocuments(event.target.files[0])
    //   console.log(documents)
    //   setdocuments({...documents,docs : documents.docs.push(type,uploads)})
    //   console.log(documents)
    // }

    const uploadDocument  =(event) =>{
        console.log(documents)}
    //important
    // const uploadDocument  =(event) =>{
    //   console.log(documents)
    //   let file = documents
    //   let type = values.DocumentType
    //   let formdata = new FormData()
      
    //   formdata.append('Aadhar',file[0])
    //   formdata.append('Pan',file[1])
    //   formdata.append('Bank Statements',file[2])
    //   formdata.append('Pay Slip',file[3])
      

  //      axios({
  //   url :'/some/api',
  //   method :"POST",
  //   headers:{
  //     authorization :"your token"
  //   },data : formdata
  // }).then((res)=>{})
    //  axios.post("https://www.mocky.io/v2/5cc8019d300000980a055e76",formdata).then(res =>{
    //    console.log(res)
    //  })
    //  }
    //imp
    
    
const submit = (event)=>{
  console.log(documents)
  
  // let type = values.DocumentType
  // let uploads = event.target.files[0]
  // if(type && event.target.files[0]){
  //   setdocuments([...documents,{
  //     id : values.DocumentType,
  //     value : uploads
  //   }])
  //   console.log(documents)
//}<h1>{documents}<h1>
}    
    
//  }
  // const handleDocument1 =(event) =>{
  //   setValues({...values,Document1:event.target.value})  
  // }
  // const handleDocument2 =(event) =>{
  //   setValues({...values,Document2:event.target.value})  
  // }
  // const handleDocument3 =(event) =>{
  //   setValues({...values,Document3:event.target.value})  
  // }
  // const handleDocument4 =(event) =>{
  //   setValues({...values,Document4:event.target.value})  
  // }


 
    return (<div>
        <form >
        <div className='uploaddocuments'>
      <label   style={{color : "white" }}>Upload documents(Mandatory *)  :  </label>
            <br />
            <br />     
{/* <div className='Documents'>
   
<input  type="file" value={values.Document1} onChange={handleDocument1} style={{color : "white"}} />

<button id = "aadhar" style={{backgroundColor :" #6c8297",marginLeft : "12px"}}>Upload Aadhar</button>
<br />

<input  type="file" value={values.Document2} onChange={handleDocument2} style={{color : "white"}} />

<button id ="pan" style={{backgroundColor :" #6c8297",marginLeft : "33px"}}>Upload Pan</button>
<br />

<input  type="file" value={values.Document3} onChange={handleDocument3} style={{color : "white"}} />

<button id ="bankstatements" style={{backgroundColor :" #6c8297",marginLeft : "-42px"}}>Upload Bank Statements</button>
<br />

<input  type="file" value={values.Document4} onChange={handleDocument4} style={{color : "white"}} />

<button id = "payslip" style={{backgroundColor :" #6c8297"}}>Upload Pay Slips</button>
</div> */}

  <center><Select placeholder={"Pick a Type"} options={fileslist}  value={fileslist.value} onChange={handleDocumentType} /></center>
         {/* <select type="text" value={values.DocumentType} onChange={handleDocumentType}>
            <option value="Aadhar">Aadhar</option>
            <option value="Pan">Pan</option>
            <option selected value="Bank statements">Bank statements</option>
            <option value="Payslip">Payslip</option>
            <option value="Others" >others</option>
        </select>  */}
        
       <br />
       <br />
       <br />
       <br />
        
        <label  style={{color : "white" }}>Images or Documents :  </label>
       <br />
        <input  type="file"  value={undefined} onChange={handleDocument} style={{color : "white"}} />
        <br />
        <span>{formErrors.docs}</span>
        {/* <button style={{backgroundColor :" #6c8297"}} onClick={uploadDocument}>Upload Documents</button> */}
        {/* </div> */}
        {/* <button>
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        </button>
        <p className='main'>Supported files</p>
        <p className="info">PDF ,JPJ ,PNG</p> */}
        
        </div>
       
        </form>
        <button style={{backgroundColor :" #6c8297" , display: "flex",justifyContent : "center",marginLeft: "950px",
    marginBottom: "70px"}} onClick={uploadDocument}>Upload Documents </button>
       </div> )
       
} 

  

export default UploadDocuments