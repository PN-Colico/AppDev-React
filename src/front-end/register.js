// Register.js
import React from 'react';
import './register.css';

const Register = () => {
  console.log('Register component rendered');
  return (
    <div className='register-body'>
    <div className="login-container">
      <form className="card card-body bg-light" method="post">
        <h2>Hello!</h2>
        <h6>Create a New Account</h6>
        <div className="form-group">
          <label><strong>Username</strong></label>
          <input className="form-control" type="text" id="user-tf" name="user"/>
        </div>
        <div className="form-group">
          <label><strong>Password</strong></label>
          <input className="form-control" type="password" id="pass-tf" name="pass" />
        </div>
        <div className="form-group">
          <label><strong>Email</strong></label>
          <input className="form-control" type="email" id="email-tf" name="email" />
        </div>
        <div id="row1">
          <button type="submit" id="btn_sign_up" className="btn btn-primary">
            <span className="fa fa-lock" /> Sign Up
          </button>
        </div>
        <hr />
      </form>
    </div>
    </div>
  );
};

export default Register;
