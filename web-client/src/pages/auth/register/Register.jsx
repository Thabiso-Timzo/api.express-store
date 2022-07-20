import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Register.css'
import image2 from '../../../assets/landing page/1.png'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

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
                        <p>Already have an account? <Link to='/'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register