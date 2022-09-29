import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { toast } from "react-toastify"

import './Register.css'
import image2 from '../../../assets/landing page/1.png'
import Spinner from '../../../components/Spinner/Spinner'
import { register, clearErrors } from '../../../actions/user-actions/userActions'

const Register = () => {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)

    const { name, email, password, password2 } = FormData;

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate('/login')
        }
    }, [dispatch, isAuthenticated, navigate, error ])

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match.')
        } else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }       
    }

     if (loading) {
        return (
            <div style={{
                marginTop: 250, 
                marginLeft: 600,
                marginRight: 'auto'
                }}
            >
                <Spinner />
            </div>
        )
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
                            alue={password2} 
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