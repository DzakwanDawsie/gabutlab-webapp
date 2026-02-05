'use client'

import LoginForm from './LoginForm'
import { useState } from 'react'
import RegisterForm from './RegisterForm'

const showLoginForm = (onClickSignUp: () => void) => {
  return <>
    <LoginForm/>
    <span>
      Don&apos;t have account yet? <a href="#" onClick={onClickSignUp}>Sign Up</a>
    </span>
  </>
}

const showRegisterForm = (onClickLogin: () => void) => {
  return <>
    <RegisterForm/>
    <span>
      Already have an account? <a href="#" onClick={onClickLogin}>Login</a>
    </span>
  </>
}

function LoginDialog() {
  const [isHidden, setIsHidden] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const onClickSignUp = () => {
    setIsLoginForm(false);
  }

  const onClickLogin = () => {
    setIsLoginForm(true);
  }

  const onClickClose = () => {
    setIsHidden(true);
  }

  return (
    <div className={`login-dialog ${isHidden ? 'hidden' : ''}`}>
      <div className="login">
        <span className="login-close" onClick={onClickClose}>X</span>
        <div className="login-header">
          <span>Account {isLoginForm ? 'Login' : 'Register'}</span>
        </div>
        <div className="login-body">
          {isLoginForm ? showLoginForm(onClickSignUp) : showRegisterForm(onClickLogin)}
        </div>
      </div>
    </div>
  )
}

export default LoginDialog