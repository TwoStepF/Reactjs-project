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
      <div class="login-wrapper">
      <form onSubmit={handleSubmit} class="form">
            <h2>Register</h2>
              <div class="input-group">

                <input
                      id="loginUser"
                      type="text"
                      className="loginrInput"
                      placeholder="Username"
                      onChange={e => setUsername(e.target.value)}
                    />
              </div>
              <div class="input-group">

                <input
                      id="loginPassword"
                      type="password"
                      className="loignInput"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                    /> 
              </div>

              <button type="submit" class="submit-btn">Register</button>
        </form>
    </div>
    );
}

export default Registger;