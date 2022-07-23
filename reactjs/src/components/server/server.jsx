import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ServerService from '../../service/ServerService';

Server.propTypes = {
    
};

function Server({server}) {
    const handle = async (e) => {
        try{
            e.preventDefault();
            const res = await ServerService.deleteServer(server.id)
            if(res.data.status === 'OK'){
                alert(res.data.message)
                window.location.reload()
            }else{
                alert(res.data.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
            <tr>
                <td>{server.id}</td>
                <td>{server.name}</td>
                <td>{server.status}</td>
                <td>{server.isRunSSH}</td>
                <td>{server.speed}</td>
                <td>{server.address}</td>
                <td><Link to={"/update/" + server.id}><button>sửa</button></Link></td>
                <td><button onClick={handle}>xóa</button></td>
             </tr>
    );
}

export default Server;