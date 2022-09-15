import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import './Login.css'
import image1 from '../../../assets/landing page/1.png'
import { clearErrors, login } from "../../../actions/user-actions/userActions"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("")

    const { error, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    }

    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (isAuthenticated) {
          navigate('/')
        }
    }, [dispatch, error, alert, navigate, isAuthenticated]);

  return (
    <section>
        <div className="image-box">
            <img src={image1} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={loginEmail} 
                            placeholder="Enter your email address" 
                            onChange={(e) => setLoginEmail(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            value={loginPassword} 
                            placeholder="Enter your password" 
                            onChange={(e) => setLoginPassword(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <button>Login</button>
                    </div>
                    <div className="input-box">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer
            // position="bottom-center"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
          />
    </section>
  )
}

export default Login