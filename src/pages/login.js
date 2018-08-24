import React from 'react'
import LoginHandler from '../components/login.js'

const LoginPage = () => (
  <div>
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1>Login</h1>
          <LoginHandler />
        </div>
      </div>
    </div>
  </div>
)

export default LoginPage
