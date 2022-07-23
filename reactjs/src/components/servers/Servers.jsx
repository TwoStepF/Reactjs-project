import React from 'react';
import PropTypes from 'prop-types';
import Server from '../server/server';

Servers.propTypes = {
    
};

function Servers({servers}) {

    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>status</th>
                    <th>Run SSH</th>
                    <th>speed</th>
                    <th>address</th>
                </tr>
                {servers?.map((data) => (
                    <Server server = {data}/>
                ))}
            </table>
        </div>
    );
}

export default Servers;