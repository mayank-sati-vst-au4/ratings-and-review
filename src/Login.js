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

            <div className='login_container'>
                <h1> Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                    
                    <h5>Password</h5>
                    <input type='passsword'/>

                    <button className='login_signInButton'>Sign In</button>

                </form>

                <p>By signining in to amazon clone app you agree to the terms of service
                    of the app
                </p>

                <button className='login_registerButton'> Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
