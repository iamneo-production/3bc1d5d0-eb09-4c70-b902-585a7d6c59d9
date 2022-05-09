import React, { useState } from 'react'
import axios from 'axios'
import Select from 'react-select';
// import { useNavigate } from "react-router-dom"
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UploadDocuments({ values, setValues, documents, setdocuments, formErrors }) {

  var fileslist = [
    {
      value: "Aadhar Card",
      label: "Aadhar Card"
    },
    {
      value: "PAN",
      label: "PAN"
    },
    {
      value: "Bank Statement",
      label: "Bank Statement"
    },
    {
      value: "Pay-Slip",
      label: "Pay-Slip"
    }
  ]



  const handleDocumentType = (event) => {
    setValues({ ...values, DocumentType: event.value })
  }

  const handleDocument = (event) => {
    let type = values.DocumentType
    let uploads = event.target.files[0]
    if (type && uploads) {
      setdocuments([...documents, {
        id: type,
        value: uploads
      }])

    }
  }


  const uploadDocument = (event) => {
    console.log("documents uploaded");
  }
  

  const submit = (event) => {
    // console.log(documents)
  }

  return (
    <div>
      <form >
        <div className='uploaddocuments'>
          <label>Upload images(*)  :  </label>
 
           <center><Select placeholder={"Pick a Type"} id="selectDocumentType" options={fileslist} value={fileslist.value} onChange={handleDocumentType} /></center>
          
          <input type="file" value={undefined} id="chooseFile" onChange={handleDocument} />
          {/* <span>{formErrors.docs}</span>         */}
        </div>

      </form>
      
      {/* <button className='uploadBtn' onClick={uploadDocument}  id="uploadDocumentsButton">Upload the image </button> */}
    </div>)

}



export default UploadDocuments