import React, { useEffect } from 'react'
import './css/Main.css'
function Submit() {
  var loanId =0;
useEffect(()=>{
  loanId = loanId+1
})



  return (
      <div className='submit'>
    <h2>You have Successfully applied for your loan.</h2>
    <h3>Your Loan Id is : </h3>
    </div>
  )

  }
export default Submit