import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        SahanSocial
                    </h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on SahanSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInputEmail" />
                        <input placeholder="Password" className="loginInputPassword" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegistrationButton">
                            Create a new account
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
