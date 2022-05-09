import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import  '../../common/Main.css'


const NewLoanFormFileItem = ({file,deleteFile,fileType}) => {
  return (
  <div className="loanFormFileItemList">
    
   <li key={file.name}>
       <FontAwesomeIcon icon={faFileAlt}/>
       <div style={{ display:"inline", marginLeft:"20px"}}>{fileType} : {file.name}</div>
       <div style={{ display:"inline", marginLeft:"20px"}}>
           {<FontAwesomeIcon icon={faTrash}
           onClick={()=> deleteFile(file.name)}/>}
       </div>                   
   </li>
 </div> )
}

export default NewLoanFormFileItem        