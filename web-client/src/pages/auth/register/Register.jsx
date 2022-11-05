import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"

import './Register.css'
import image2 from '../../../assets/landing page/1.png'
import { register } from '../../../actions/user-actions/userActions'
import {
    isEmail,
    isEmpty,
    isLength,
    isMatch
} from '../../../utils/validation/Validation'
import Spinner from '../../../components/Spinner/Spinner'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (error) {
            toast.error(error)
        }

        if (userInfo) {
            navigate('/login')
        }
    }, [error, userInfo, navigate])

    const onSubmit = async (e) => {
        e.preventDefault()

        if (isEmpty(name) || isEmpty(password)) 
            return toast.error('Please fill in all fields')

        if (!isEmail(email)) 
            return toast.error('Invalid email address.')

        if (isLength(password)) 
            return toast.error('Password must be at least 8 character.')

        if (!isMatch(password, password2)) 
            return toast.error('Your passwords do not match.')

        dispatch(register(name, email, password));
    }

  return (
    <section>
        {
            loading ? (
                <div className='loading'>
                    <Spinner />
                </div>
            ): (
                <>
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
                                        onChange={(e) => setName(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPassword(e.target.value)} 
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
                                        onChange={(e) => setPassword2(e.target.value)}
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
                </>
            )
        }
    </section>
  )
}

export default Register