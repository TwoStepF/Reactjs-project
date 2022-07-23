import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Servers from '../../components/servers/Servers';
import ServerService from '../../service/ServerService';


Home.propTypes = {
    
};

function Home(props) {
    const [servers, setServers] = useState([]);
    useEffect(()=>{
        const AllServers = async () => {
            const res = await ServerService.getAllServer()
            setServers(res.data)
        }
        AllServers()
    }, [])
    return (
        <div>
            <Servers servers = {servers} />
        </div>
    );
}

export default Home;