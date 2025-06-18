import React from 'react'
import { useState } from 'react';
import axios from "axios"
// import {useNavigate} from 'react-router-dom';

function Signup() {

  let [formData, setFormData] = useState({
    email: "",
    name: "",
    password: ""
  });

  let handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  let handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/signup", formData);
      console.log(result);
        formData.name = "";
        formData.email = "";
        formData.password = "";
        window.location.href = 'http://localhost:5173/dashboard';
    } catch (err) {
      formData.name = "";
      formData.email = "";
      formData.password = "";
      alert("Something went wrong");
      console.log(err);
    }
  }



  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-2'></div>
        <div className='col-4'>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <form onSubmit={handleOnSubmit}>
            <div className='mt-3'>
              <label htmlFor='email' className='form-label'>Email address</label>
              <input type="email" className='form-control' name='email' id='email' onChange={handleOnChange} value={formData.email} required />
            </div>
            <div className='mt-3'>
              <label htmlFor='username' className='form-label'>Username</label>
              <input type="text" className='form-control' name='name' id='username' onChange={handleOnChange} required />
            </div>
            <div className='mt-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type="password" className='form-control' name='password' id='password' onChange={handleOnChange} required />
            </div>
            <button type="submit" className="btn btn-primary mt-3" >Sign Up</button>
          </form>
        </div>
        <div className='col-1'></div>
        <div className='col-5'>
          <img src="/media/images/signupandlogin.svg" alt="signup image" style={{ width: "90%" }} />
        </div>
      </div>
    </div>

  )
}

export default Signup;
