import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { useSelector, useDispatch } from 'react-redux'
//import { logout, reset } from '../redux/auth/authSlice'

import './NavBar.css'
import logo from '../../images/logo.png'

const NavigationBar = () => {
    const [show, setShow] = useState(true);

    //const history = useHistory();
    //const dispatch = useDispatch();
    //const { user } = useSelector((state) => state.auth);

    function showSwitch() {
        return setShow(!show);
    }

    // const onLogout = () => {
    //     dispatch(logout());
    //     dispatch(reset());
    //     history.push('/')
    // }

  return (
    <div className="navbar"> 
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className={show ? "links active" : "links"}> 
            <Link onClick={() => showSwitch()} to="/">Login</Link>
            <Link onClick={() => showSwitch()} to="/register">Register</Link>
        </div>
        <div 
            className={show ? "bars-button active" : "bars-button"} 
            onClick={() => showSwitch()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default NavigationBar