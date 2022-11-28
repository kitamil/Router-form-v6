import React, { useEffect } from 'react'
import {  useState } from "react";


const Forgetpage = () => {

  const [message, setMessage] = useState('');
  const [error,setError] = useState(null);
  const [show,setShow] =useState(false);

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    if (message.length === 0) {
      setError('input value is NOT empty');
      setShow(true)
      
    }
  };


  useEffect(()=>{

    setShow(false)
   

  },[message]);

  return (
    <div className="container ">
    <div className="card bg-info text-white mt-5 ">
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email ID:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            
            onChange={handleChange}
          />
        </div>
        <div>
        {show &&  <p>{error}</p>}
        </div>
        

        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-dark" type="submit">
           
              Reset Password
           
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Forgetpage