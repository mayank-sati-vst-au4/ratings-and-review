import React, { useState } from 'react';
import './Login.css'; 
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Firebase code here
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
            e.preventDefault();

            // Firebase stuff here now

            auth
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    //  Sucessfully created a new user with email and password
                    console.log(auth);
                    if(auth) {
                        history.push('/');
                    }
                })
                // If error alert with the error
                .catch(error => alert(error.message));
    }
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
                    <input type='text' value={email} 
                    onChange= {e=> setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type='passsword' value={password} 
                    onChange= {e=> setPassword(e.target.value)}/>

                    <button type ='submit' onClick={signIn} className='login_signInButton'>Sign In</button>

                </form>

                <p>By signing in to amazon clone app you agree to the terms of service
                    of the app
                </p>

                <button onClick={register}className='login_registerButton'> Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
