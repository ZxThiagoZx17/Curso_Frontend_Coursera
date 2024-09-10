import React, { useState } from 'react';
import './Login.css';
import googleIcon from './assets/google-icon.png'; 

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login Email:', email);
    console.log('Login Password:', password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register Name:', name);
    console.log('Register Email:', email);
    console.log('Register Password:', password);
  };

  const handleGoogleLogin = () => {
    const googleLoginUrl = "https://accounts.google.com/signin";
    const width = 600, height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(googleLoginUrl, "Google Login", `width=${width},height=${height},top=${top},left=${left}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Sign in' : 'Sign up'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">{isLogin ? 'Sign in' : 'Sign up'}</button>
        </form>
        <div className="social-login">
          <p>Or {isLogin ? 'sign in' : 'sign up'} with</p>
          <button className="google-login-button" aria-label="On Click" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
          </button>
        </div>
        <p className="toggle-text">
          {isLogin ? 'You do not have an account?' : 'Do you already have an account?'}{' '}
          <span aria-label="On Click" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Sign in'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
