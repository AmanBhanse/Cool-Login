import React from 'react'
import LoginComponent from './LoginComponent'
import WingsComponent from './WingsComponent'
function LoginPage() {
    return (
        <div className="grid-container">
            <WingsComponent />
            <LoginComponent/>
            <WingsComponent />
        </div>
    )
}

export default LoginPage
