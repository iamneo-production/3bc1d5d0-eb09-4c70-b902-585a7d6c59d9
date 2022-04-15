import axios from 'axios'
import React, { useState,useEffect } from 'react'
import  './css/Main.css'
import { Link } from 'react-router-dom'
import baseurl from '../api/bootapi'
import Filedisplay from './Filedisplay'
function Checkdetails() {
    const [files,setFiles] = useState([])
     
    const getfiles=()=>{
        axios.get(`${baseurl}/user/documents/1`).then((res)=>{
            console.log(res);
            setFiles(res.data);
            //console.log(res.data)
            
        },(e)=>{console.log(e)})
    }

    useEffect(() => {
        getfiles()
    }, [])
    

  return (
      <div className='Filecheck'> {console.log(files.length)}
      {console.log(files.aadhar)}

      <button type='button' onClick={(e)=>{
        e.preventDefault();
        window.open(`${files.aadhar}`)
      }}>AADHAR</button>

<button type='button' onClick={(e)=>{
        e.preventDefault();
        window.open(`${files.pan}`)
      }}>PAN</button>

<button type='button' onClick={(e)=>{
        e.preventDefault();
        window.open(`${files.bankStatements}`)
      }}>BANKSTATEMENTS</button>

<button type='button' onClick={(e)=>{
        e.preventDefault();
        window.open(`${files.paySlip}`
        )}}>PAYSLIP</button>
     
    {/* <Link to={files.aadhar} > <button href={files.aadhar}>AADHAR</button> </Link>
      <br />
      <a href={files.pan}>PAN</a><br />
      <a href={files.bankStatements}>BANKSTATEMENTS</a><br />
      <a href={files.paySlip}>PAYSLIP</a> */}
   {/* <button style={{color : "black",display:"flex",alignContent:'center'}} onClick={files.length>0?files.map((item)=><h1>hii</h1>):<h1>"No files"</h1>}>Check details</button> */}
    </div>
  )
}

export default Checkdetails