import React from 'react'

import './ResetPassword.css'
import image2 from '../../../assets/landing page/1.png'
//3:28:53
const ResetPassword = () => {
  return (
    <section>
    <div className="image-box">
        <img src={image2} alt="" />
    </div>
    <div className="content-box">
        <div className="form-box">
            <h2>Reset password</h2>
            <form>
                <div className="input-box">
                    <span>Email</span>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        //value={name} 
                        placeholder="Enter your new password" 
                        //onChange={onChange}
                    />
                </div>
                <div className="input-box">
                    <span>Email</span>
                    <input 
                        type="password" 
                        id="password2" 
                        name="password2" 
                        //value={name} 
                        placeholder="Confirm your password" 
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

export default ResetPassword