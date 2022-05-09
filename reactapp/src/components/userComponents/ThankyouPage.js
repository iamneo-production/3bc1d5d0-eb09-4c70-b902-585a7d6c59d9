import React from 'react'
import { useLocation } from 'react-router-dom';

export default function ThankyouPage() {
    const { state } = useLocation();
  return (
    // <div className='thankyouContainer'>
    <div style={{width:"600px", margin:"50px auto", textAlign:"center"}}>
        <h1 style={{color:"green", margin:"10px auto"}}>Thank you!</h1>
        <h3>The installment amount Rs. {state.paid} has been paid successfully!</h3>
    </div>
  )
}
