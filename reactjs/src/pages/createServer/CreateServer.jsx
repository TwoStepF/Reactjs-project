import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ServerService from '../../service/ServerService';

CreateServer.propTypes = {
    
};

function CreateServer(props) {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const res = await ServerService.createServer(name, address, password)
            if(res.data.status === 'OK'){
                window.location.replace("/")
            }else{
                alert(res.data.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="createServer">
        <span className="Title">Create server</span>
        <form className="Form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="Input"
            placeholder="Enter rname..."
            onChange={e => setName(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="Input"
            placeholder="Enter password..."
            onChange={e => setPassword(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            className="Input"
            placeholder="Enter address..."
            onChange={e => setAddress(e.target.value)}
          />
          <button className="Button" type="submit">
            Create
          </button>
        </form>
      </div>
    );
}

export default CreateServer;