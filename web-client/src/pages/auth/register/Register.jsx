import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { toast } from "react-toastify"
import axios from 'axios'

import './Register.css'
import image2 from '../../../assets/landing page/1.png'
import {
    isEmail,
    isEmpty,
    isLength,
    isMatch
} from '../../../utils/validation/Validation'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        err: '',
        success: ''
    })

    const { name, email, password, password2, err, success } = user

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (err) {
            toast.error(err)
        }

        if (success) {
            toast.success(success)
            navigate('/login')
        }
    }, [, err, success, navigate])

    const onChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user, 
            [name]: value, 
            err: '', 
            success: ''
        }) 
    }
// 2.48.46
    const onSubmit = async (e) => {
        e.preventDefault()

        if (isEmpty(name) || isEmpty(password)) 
            return setUser({...user, err: 'Please fill in all fields.', success: ''})

        if (!isEmail(email)) 
            return setUser({...user, err: 'Invalid email address.', success: ''})

        if (isLength(password)) 
            return setUser({...user, err: 'Password must be at least 8 character.', success: ''})

        if (!isMatch(password, password2)) 
            return setUser({...user, err: 'Your passwords do not match.', success: ''})

        try {
            const config = { 
                headers: { 
                     "Content-Type": "application/json" 
                } 
            };

            const res = await axios.post('/api/users/register',
            {name, email, password},
            config
            )

            setUser({
                ...user, 
                err: '',
                success: res.data.msg,
            })
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
            <img src={image2} alt="" />
        </div>
        <div className="content-box">
            <div className="form-box">
                <h2><FaUser /> Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <span>Full name</span>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name} 
                            placeholder="Enter your user full name" 
                            onChange={onChange}
                        />
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input 
                            type="text"
                            id="email" 
                            name="email" 
                            value={email} 
                            placeholder="Enter your email" 
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
                    <div className="input-box">
                        <span>Confirm Password</span>
                        <input 
                            type="password" 
                            id="password2" 
                            name="password2" 
                            value={password2} 
                            placeholder="Confirm your password" 
                            onChange={onChange}
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
    </section>
  )
}

export default Register