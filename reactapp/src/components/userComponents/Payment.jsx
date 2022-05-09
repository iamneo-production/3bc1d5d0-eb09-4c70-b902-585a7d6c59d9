import React from 'react';
import { render } from 'react-dom';
import Card from 'react-credit-cards';
import { useState } from 'react';  
import SupportedCards from './Cards';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../common/Main.css'

import {
  formatCreditCardNumber,
  formatCVC, 
  formatExpirationDate,
  formatFormData,
} from './Utils';


import 'react-credit-cards/es/styles-compiled.css';


function Payment() {

  const baseurl = "http://localhost:8080/api/auth";

  const navigate = useNavigate()
  const l = useLocation()
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  });

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      console.log(issuer)
      setState({...state, issuer} );
    }
  };

  const handleInputFocus = ({ target }) => {
    setState({
      ...state,
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    setState({ ...state, [target.name]: target.value });
  };

  const handleSubmit = e => {
    //   e.preventDefault();
    //  // const { issuer } = this.state;
    //   const formData = [...e.target.elements]
    //     .filter(d => d.name)
    //     .reduce((acc, d) => {
    //       acc[d.name] = d.value;
    //       return acc;
    //     }, {});

    //   setState(...state,{ formData });
    //   //this.form.reset();

    e.preventDefault();
    console.log("final pay button clicked")
    console.log(l)
    axios.put(`${baseurl}/UpdateRepayment/${l.state.LoanId}/${l.state.Amount}`).then((res) => {
      console.log(res);
    })
    navigate("/userhomepage/thankyou", { state : {paid : l.state.Amount} })
  };


  return (
    <div key="Payment">         
      <div className="App-payment">
        <h2 style={{textAlign:"center" , margin:"10px auto 30px auto"}}>Payment</h2>
        <Card
          number={state.number}
          name={state.name}
          expiry={state.expiry}
          cvc={state.cvc}
          focused={state.focused}
          callback={handleCallback}
        />
        {/* ref={c => (form = c)} */}
        <form className='paymentForm'  onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Enter your Card number"
              pattern="[\d| ]{16,22}"
              required 
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {/* <br /> */}
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {/* <br /> */}
            <input
              type="tel"
              name="expiry"
              className="form-control"
              placeholder="Enter your card expiry date"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {/* <br /> */}
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="Enter your card CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          {/* <br/> */}

          </div>
          <input type="hidden" name="issuer" value={state.issuer} />
          <div className="form-actions d-grid">
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </form>
        {state.formData && (
          <div className="App-highlight">
            {formatFormData(state.formData).map((d, i) => <div key={i}>{d}</div>)}
          </div>
        )}




      </div>

    </div>
  )
}

export default Payment

