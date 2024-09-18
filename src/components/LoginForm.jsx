import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import '../scss/LoginForm.scss';

const LoginForm = () => {
  return (
    <form>
<div className="flex flex-direction: 'row' items-center">
  <img src="https://www.svgrepo.com/show/530572/accelerate.svg" alt="Ícone" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
  <h3 className="text-2xl font-semibold text-[#000000]">Generic Corp.</h3>
</div>
      <h3 className="text-2xl font-semibold text-[#000000] mb-6">Nice to see you again</h3> <br />
      <div className="mb-3">
        <label htmlFor="email" className="form-label">  Login</label>
        <input 
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email or phone number"
          style={{ backgroundColor: 'rgba(211, 211, 211, 0.4)' }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">  Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          style={{ backgroundColor: 'rgba(211, 211, 211, 0.4)' }}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <div className="d-flex align-items-center" style={{ whiteSpace: 'nowrap' }}>
            <label className="form-check-label me-4 mb-0" htmlFor="flexSwitchCheckDefault">
              Remember me
            </label>
            <p className="mb-0">
              <a href="/forgotpassword">Forgot password?</a>
            </p>
          </div>
        </div>
      </div> <br />
      <button type="submit" className="btn btn-primary">Sign In</button> <br /><br />
      <GoogleLoginButton />
      <div class="mb-2">
        <p>
          Don't have an account? <a href="/register">Sign up now</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
