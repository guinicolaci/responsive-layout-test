import React from 'react';
import LoginForm from '../components/LoginForm';
import '../scss/LoginPage.scss';
import image from '../assets/images/image.jpg';

const LoginPage = () => {
    return (
      <div className="login-container">
            <img className="login-image" src={image} alt="imagem" />
      <div className="container vh-100">
        <div className="row h-100 align-items-center justify-content-end">
          <div className="col-md-10 ">
            <LoginForm />
          </div>
        </div>
      </div>
      </div>
    );
  };

export default LoginPage;










