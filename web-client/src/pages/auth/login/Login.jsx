import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

import './Login.css'
import image1 from '../../../assets/landing page/1.png'
import Spinner from '../../../components/Spinner/Spinner'
import { login, clearErrors } from '../../../actions/user-actions/userActions'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate('/')
        }
    }, [dispatch, isAuthenticated, navigate, error ])

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit =  (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
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
        {/* <ToastContainer 
            // position="bottom-center"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
          /> */}
    </section>
  )
}

export default Login