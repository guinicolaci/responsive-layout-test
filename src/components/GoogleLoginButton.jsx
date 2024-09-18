import React from 'react';

const GoogleLoginButton = () => {
  return (
    <button 
      className="btn btn-dark d-flex align-items-center justify-content-center mt-3"
    >
      <img 
        src="https://www.vectorlogo.zone/logos/google/google-icon.svg" 
        alt="Google Logo" 
        style={{ width: '20px', marginRight: '8px' }} 
      />
      Or sign in with Google
    </button>
  );
};

export default GoogleLoginButton;