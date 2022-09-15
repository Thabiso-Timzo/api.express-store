import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import './Register.css'
import image2 from '../../../assets/landing page/1.png'
import { clearErrors, register } from "../../../actions/user-actions/userActions"

const Register = () => {
    const dispatch = useDispatch()
    const [registerFullName, setRegisterFullName] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
    
        
        dispatch(register(registerFullName, registerEmail, registerPassword));
        console.log(registerFullName + ' ' + registerEmail + ' ' + registerPassword)

        

    }

  return (
    <section>
        <div className="image-box">
            <img src={image2} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Full name</span>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={registerFullName} 
                            placeholder="Enter your user full name" 
                            onChange={(e) => setRegisterFullName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={registerEmail} 
                            placeholder="Enter your email" 
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            value={registerPassword} 
                            placeholder="Enter your password" 
                            onChange={(e) => setRegisterPassword(e.target.value)} 
                        />
                    </div>
                    <div className="input-box">
                        <span>Confirm Password</span>
                        <input 
                            type="password" 
                            id="password2" 
                            name="password2" 
                            value={registerConfirmPassword} 
                            placeholder="Confirm your password" 
                            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <button>Register</button>
                    </div>
                    <div className="input-box">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </section>
  )
}

export default Register