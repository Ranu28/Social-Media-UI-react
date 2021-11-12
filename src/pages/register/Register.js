import React from 'react'
import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">
                        SahanSocial
                    </h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on SahanSocial.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Email" className="registerInputEmail" />
                        <input placeholder="Name" className="registerInputEmail" />
                        <input placeholder="Password" className="registerInputPassword" />
                        <input placeholder="Confirm Password" className="registerInputPassword" />
                        <button className="registerButton">Sign up</button>
                        <button className="registerRegistrationButton">
                            Log into Account
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
