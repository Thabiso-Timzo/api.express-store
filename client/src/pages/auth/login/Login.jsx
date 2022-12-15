import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

import './Login.css'
import image1 from '../../../assets/landing page/1.png'
import { login } from '../../../actions/user-actions/userActions'
import Spinner from '../../../components/Spinner/Spinner'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin
    
    useEffect(() => {
        if (error) {
            toast.error(error)
         }
    
        if (userInfo) {
            navigate('/')
        }
    }, [error, userInfo, navigate])

    const onSubmit =  async (e) => {
        e.preventDefault()

        dispatch(login(email, password))
    }

  return (
    <section>
       {
        loading ? (
            <div style={{marginTop: 50, marginLeft: 50}}>
                <Spinner />
            </div>
        ) : (
        <>
            <div className="login-image-box">
                <img src={image1} alt="" />
            </div>
            <div className="login-content-box">
                <div className="login-form-box">
                    <h2><FaSignInAlt /> Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="login-input-box">
                            <span>Email</span>
                            <input 
                                type="text"
                                id="email" 
                                name="email" 
                                value={email} 
                                placeholder="Enter your email address" 
                                onChange={(e) => setEmail(e.target.value)}  
                            />
                        </div>
                        <div className="login-input-box">
                            <span>Password</span>
                            <input 
                                type="password"
                                id="password" 
                                name="password" 
                                value={password} 
                                placeholder="Enter your password" 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="login-forgot">
                            <Link to='/forgot_password'>Forgot password</Link>
                        </div>
                        <div className="login-input-box">
                            <button>Login</button>
                        </div>
                        <div className="login-input-box">
                            <p>Don't have an account? <Link to='/register'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
       )}
    </section>
  )
}

export default Login