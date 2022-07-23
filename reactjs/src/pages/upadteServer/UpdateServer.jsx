import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ServerService from '../../service/ServerService';


UpdateServer.propTypes = {
    
};

function UpdateServer(props) {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [id, setId] = useState("")
    const params = useParams();

    useEffect(()=>{
      const getServers = async () => {
        const rs = await axios.get("/server/" + params.id)
        setName(rs.data.name)
        setAddress(rs.data.address)
        setId(params.id)
      }
      getServers()
    }, [])

    const handle = async (e) => {
      try{
          e.preventDefault();
          const res = await ServerService.updateServer(id,name,address )
          if(res.data.status === 'OK'){
              alert(res.data.message)
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
          <form className="Form">
            <label>Name</label>
            <input
              defaultValue={name}
              type="text"
              className="Input"
              placeholder="Enter name..."
              onChange={e => setName(e.target.value)}
            />
            <label>Address</label>
            <input
              defaultValue={address}
              type="text"
              className="Input"
              placeholder="Enter address..."
              onChange={e => setAddress(e.target.value)}
            />
            <button className="Button" type="submit" onClick={handle}>
              Update
            </button>
          </form>
      </div>
    );
}

export default UpdateServer;