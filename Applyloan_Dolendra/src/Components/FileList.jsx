import React from 'react'
import FileItem from './FileItem'
const FileList = ({documents,removeFile}) => {
   const deleteFileHandler = (_name)=>{
       removeFile(_name)

   }
  return (
    <ul>
        {
            documents && documents.map(d=><FileItem key={d.value.name} file={d.value} deleteFile={deleteFileHandler} fileType={d.id}/>)
        }
    </ul>
  )
}

export default FileList