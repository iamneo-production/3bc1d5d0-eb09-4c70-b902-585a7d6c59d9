import React from 'react'
import '../../common/Main.css'
import { useLocation } from 'react-router-dom';

function LoanSubmit(props) {

  const { state } = useLocation();

  if (typeof(state.info) === 'number') {
    return (
      <div className='submitPage'>
        <h1 style={{ color: "green" }}>Congratulations!</h1>
        <h4>You have Successfully applied for your loan.</h4>
        <h3 style={{ fontStyle: "normal" }}>Your Loan Id is <b>{state.info}</b>.</h3>
        <h5>Your may save this loan id for future reference.</h5>
      </div>
    )
  }
  else{
    return (
      <div className='submitPage'>
        <h2 style={{ color: "red" }}>Sorry! Network error.</h2>
        <h4>Please try again later.</h4>
      </div>
    )
  }
}

export default LoanSubmit;