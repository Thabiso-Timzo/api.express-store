import React, { useState } from 'react'

import './ForgotPassword.css'
import image2 from '../../../assets/landing page/1.png'
//3:28:53
const ForgotPassword = () => {
    const [email, setEmail] = useState('')
  return (
    <section>
    <div className="forgot-image-box">
        <img src={image2} alt="" />
    </div>
    <div className="forgot-content-box">
        <div className="forgot-form-box">
            <h2>Password Recovery</h2>
            <form>
                <div className="forgot-input-box">
                    <span>Email</span>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={email} 
                        placeholder="Enter your email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="forgot-input-box">
                    <button>Send</button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default ForgotPassword