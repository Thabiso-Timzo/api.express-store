import React from 'react'

import './ForgotPassword.css'
import image2 from '../../../assets/landing page/1.png'
//3:28:53
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
                    <span>Email</span>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        //value={name} 
                        placeholder="Enter your email" 
                        //onChange={onChange}
                    />
                </div>
                <div className="input-box">
                    <button>Send</button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default ForgotPassword