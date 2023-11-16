// Login.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './login.css';

const Login = () => {

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  console.log('Login component rendered');
  return (
  <div className="login-body">
    <div className="login-container">
      <form className="card card-body bg-light" method="post">
        <h2>Hello!</h2>
        <h6>Please Login To Your Account</h6>
        <div className="form-group-user">
          <label><strong>Username</strong></label>
          <input className="form-control-user" type="text" id="user-tf" name="user"/>
        </div>
        <div className="form-group-password">
          <label><strong>Password</strong></label>
          <input className="form-control-pass" type="password" id="pass-tf" name="pass" />
        </div>
        <div id="row1">
        <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMeCheckbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="form-check-label" htmlFor="rememberMeCheckbox">Remember Me</label>
          </div>
          <button type="submit" id="btn_sign_in" className="btn btn-primary">
            <span className="fa fa-lock" /> Sign In
          </button>
        </div>
        <hr />
        <div className="btm-links">
          <div id="forgot-password">
            <a href='#'>Forgot Your Password?</a>
          </div>
          <div id="create-account">
            <RouterLink to='/register'>Create An Account</RouterLink>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;





