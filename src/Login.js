import React from 'react'
import './Login.css'; 
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className="login">
            <Link to = '/'>
            <img className='login_logo'
            src='https://qph.fs.quoracdn.net/main-qimg-58b6d90da5d3feeafb33f5c101061429' alt=''/>
            </Link>
        </div>
    )
}

export default Login
