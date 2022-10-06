import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

import './Activation.css'

const Activation = () => {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate()

    const login = () => navigate('/login')

    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const config = { 
                        headers: { 
                             "Content-Type": "application/json" 
                        } 
                    }

                    const res = await axios.post('/api/users/activation', 
                    {activation_token},
                    config
                    )
                    setSuccess(res.data.success)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token]) 

    useEffect(() => {
        if (err) {
            toast.error(err)
        }

        if (success) {
            toast.success(success)
        }
    },[err, success])

    return (
        <>
            <p>
                Your email has been activated. Please login!!!
            </p>
            <div className="activation_container" onClick={login}>
                <p>Login</p>
            </div>
        </>
    )
}

export default Activation