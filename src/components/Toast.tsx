import React, { useEffect, useState } from 'react'

type Props = {
  message: string,
}

function Toast(props: Props) {
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  })
  
  return (
    <div className="toast-container">
        <div id="toast" className={`toast ${show ? 'show' : ''}`}>{props.message}</div>
    </div>
  )
}

export default Toast