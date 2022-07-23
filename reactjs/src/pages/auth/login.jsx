import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import AuthService from '../../service/AuthService';

Login.propTypes = {
    
};

function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
      try{
          e.preventDefault();
          const res = await AuthService.login(username, password)
          if(res.data.status === 'OK'){
              localStorage.setItem('username', res.data.username);
              localStorage.setItem('token', res.data.token);
              window.location.replace("/")
          }else{
              alert(res.data.message)
          }
      }catch(err){
          console.log(err)
      }
  }
  return (
      <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginrInput"
          placeholder="Enter your username..."
          onChange={e => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loignInput"
          placeholder="Enter your password..."
          onChange={e => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
    </div>
  );
}

export default Login;