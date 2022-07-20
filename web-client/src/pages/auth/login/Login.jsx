import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
import './Login.css'
import image1 from '../../../assets/landing page/1.png'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

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