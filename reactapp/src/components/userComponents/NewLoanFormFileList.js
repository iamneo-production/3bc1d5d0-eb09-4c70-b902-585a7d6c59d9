import React from 'react'
import NewLoanFormFileItem from './NewLoanFormFileItem'


const NewLoanFormFileList = ({documents,removeFile}) => {

   const deleteFileHandler = (_name)=>{
       removeFile(_name);
   }

  return (
    <ul style={{marginBottom:"60px"}}>
      <h5 style={{ textAlign:"center"}}>Files uploaded:</h5>
        {
            documents && documents.map(d=><NewLoanFormFileItem key={d.value.name} file={d.value} deleteFile={deleteFileHandler} fileType={d.id}/>)
        }

        {/* {documents? 
            documents && documents.map(d=><NewLoanFormFileItem key={d.value.name} file={d.value} deleteFile={deleteFileHandler} fileType={d.id}/>)
          :
          "No files uploaded yet!"
        } */}
    </ul>
  )
}

export default NewLoanFormFileList