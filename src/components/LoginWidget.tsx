'use client'

import { useState } from "react"
import LoginDialog from "./LoginDialog";

function LoginWidget() {
  const [showDialog, setShowDialog] = useState(false);

  const onClickLogin = () => {
    if (showDialog) setShowDialog(false);
    setShowDialog(true);
  }
  
  
  return (
    <>
      <div className="login">
        <div className="login-body">
          <img src="/img/login-arrow.png"/>
          <span>Logging in only takes a few seconds. This will allow you to like and comment the post!</span>
          <button type="button" onClick={onClickLogin}>Login</button>
        </div>
      </div>
      {showDialog ? <LoginDialog key={Math.random()}/> : ''}
    </>
  )
}

export default LoginWidget