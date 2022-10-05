import React from 'react'

import './ForgotPassword.css'
import image2 from '../../../assets/landing page/1.png'

const ForgotPassword = () => {
  return (
    <section>
    <div className="image-box">
        <img src={image2} alt="" />
    </div>
    <div className="content-box">
        <div className="form-box">
            <h2>Password Recovery</h2>
            <form>
                <div className="input-box">
                    <span>Full name</span>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        //value={name} 
                        placeholder="Enter your user full name" 
                        //onChange={onChange}
                    />
                </div>
                <div className="input-box">
                    <span>Email</span>
                    <input 
                        type="text"
                        id="email" 
                        name="email" 
                        //value={email} 
                        placeholder="Enter your email" 
                        //onChange={onChange}
                    />
                </div>
                <div className="input-box">
                    <span>Password</span>
                    <input 
                        type="password"
                        id="password" 
                        name="password" 
                        //value={password} 
                        placeholder="Enter your password" 
                        //onChange={onChange} 
                    />
                </div>
                <div className="input-box">
                    <span>Confirm Password</span>
                    <input 
                        type="password" 
                        id="password2" 
                        name="password2" 
                        //value={password2} 
                        placeholder="Confirm your password" 
                        //onChange={onChange}
                    />
                </div>
                <div className="input-box">
                    <button>Register</button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default ForgotPassword