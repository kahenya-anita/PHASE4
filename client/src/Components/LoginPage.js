import React, { useState } from 'react'
import SignUp from './Forms/SignUp'
import Login from './Forms/Login'
import { Link } from 'react-router-dom'



function LoginPage({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true)



  return (
    <center className='loginpage'>
      <h3>Login or create an account</h3>
        {showLogin ? (
      <>
        <Login onLogin={onLogin} />
        {/* <Divider /> */}
        <p>
          Don't have an account? 
          <button onClick={() => setShowLogin(false)}  style={{border: "none"}}>Sign up</button>
        </p>
      </>

    ):(
      
      <>
        <SignUp onLogin={onLogin} />
        {/* <Divider /> */}
        Already have an account?
        <button onClick={() => setShowLogin(true)} style={{border: "none"}}>Login</button>
      </>
      )}
      Not interested? Go back to <Link to="/" >Home</Link>
    </center>
  )
}

export default LoginPage