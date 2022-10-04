import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import axios from 'axios'

import './Login.css'
import image1 from '../../../assets/landing page/1.png'
import { dispatchLogin } from '../../../actions/user-actions/userActions'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        err: '',
        success: '',
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { email, password, err, success } = user;

    useEffect(() => {
        if (err) {
            toast.error(err)
        }

        if (success) {
            toast.success(success)
            navigate('/')
        }
    }, [err, success, navigate])

    const onChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, [name]: value, err: '', success: ''
        }) 
    }       

    const onSubmit =  async (e) => {
        e.preventDefault()

        try {
            const config = { 
                headers: { 
                     "Content-Type": "application/json" 
                } 
            };

            const res = await axios.post('/api/users/login',
            {email, password},
            config
            )
            setUser({
                ...user,
                err: '',
                success: res.data.msg,
            })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
        } catch (err) {
            err.response.data.msg && setUser({
                ...user, 
                err: err.response.data.msg,
                success: '',
        
            })
        }
    }

  return (
    <section>
        <div className="image-box">
            <img src={image1} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2><FaSignInAlt /> Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter your email address" 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input 
                            type="password"
                            id="password" 
                            name="password" 
                            value={password} 
                            placeholder="Enter your password" 
                            onChange={onChange} 
                        />
                    </div>
                    <div className="forgot">
                        <Link to='/forgot_password'>Forgot password</Link>
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
    </section>
  )
}

export default Login