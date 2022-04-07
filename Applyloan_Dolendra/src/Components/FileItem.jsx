import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import  './css/Main.css'
const FileItem = ({file,deleteFile,fileType}) => {
  return (<div className='FileItem' style={{marginLeft:" 427px",textAlign:"center"}}>
   <li key={file.name}>
       <FontAwesomeIcon icon={faFileAlt} />
       <p>{fileType} : {file.name}</p>
       <div className='actions'>
           {<FontAwesomeIcon icon={faTrash}
           onClick={()=> deleteFile(file.name)}/>}
       </div>
   </li>
 </div> )
}

export default FileItem