import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Servers from '../../components/servers/Servers';
import ServerService from '../../service/ServerService';
import AuthService from '../../service/AuthService';




Home.propTypes = {
    
};

function Home(props) {
    const [servers, setServers] = useState([]);

    useEffect(()=>{
        AuthService.isAuth()
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