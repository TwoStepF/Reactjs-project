import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ServerService from '../../service/ServerService';
import { useLocation } from 'react-router-dom';
import Server from '../../components/server/server';
import Servers from '../../components/servers/Servers';


Search.propTypes = {
    
};

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Search(props) {
    let query = useQuery();
    const [servers, setServers] = useState([]);
    const [bool, setBool] = useState(true);
    useEffect(() => {
        const AllServers = async () => {
            const res = await ServerService.getByKey(query.get("key"))
            setServers(res.data)
        }
        AllServers()
    }, [])
    return (
        <div>
            {servers.length === 0 ? (
                <h3>sorry! not found</h3>
            ) : (
                <Servers servers = {servers} />
            )}
        </div>
    );
}

export default Search;