import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./header.css"
import AuthService from '../../service/AuthService';


Header.propTypes = {
    
};
const logout = () => {
    AuthService.logout()
}
function Header(props) {
    const [name, setName] = useState('');
    const [bool, setBool] = useState(true);
    const [key, setKey] = useState('');
    useEffect(()=>{
        if(localStorage.getItem('username')){
            setName(localStorage.getItem('username'))
        }else{
            setBool(false)
        }
    }, [])
    const reload = () => {
        window.location.reload()
    }
    return (
        <div class="container">

            { 
                !bool ? <span class="headerItem" >
                            <Link to = '/login' class="headerItem">
                                login
                            </Link>
                            <Link to = '/register' class="headerItem">
                                register
                            </Link>
                        </span> :
                <span class="headerItem">
                    <Link to = '/' class="headerItem">
                        home
                    </Link>
                    <Link to = '/create' class="headerItem">
                        New Server
                    </Link>
                    <span class="headerItem">
                        <input
                            type="text"
                            className="Input"
                            placeholder="Enter your key..."
                            onChange={e => setKey(e.target.value)}
                        />
                        <button onClick={reload}>
                            <Link to={"/search?key=" + key}>
                                Tìm kiếm
                            </Link>
                        </button>
                    </span>
                    <button onClick={logout}>
                        Logout
                    </button>
                </span> 
            }
        </div>
    );
}

export default Header;