import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosClient from '../../service/axiosClient';
import AuthService from '../../service/AuthService';

Registger.propTypes = {
    
};

function Registger(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const res = await AuthService.register(username,password)
            if(res.data.status === 'OK'){
                alert(res.data.message)
                window.location.replace("/login")
            }else{
                alert(res.data.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your username..."
            onChange={e => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
      </div>
    );
}

export default Registger;