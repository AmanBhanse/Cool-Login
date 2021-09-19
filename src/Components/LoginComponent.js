import React from 'react'
import SignUp from './SignUp'

function LoginComponent() {
    return (
        <div className="login-component">
                <div className="floating-popup">
                    <div className="inner-login-component-container" >
                        <div className="sign-up-container">
                            <SignUp />
                        </div>
                        <div className="log-in-container">label</div>
                    </div>
                </div>
        </div>
    )
}

export default LoginComponent
