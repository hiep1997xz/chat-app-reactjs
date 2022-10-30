import React from 'react'

const Login = () => {
  return (
    <div className='form_container'>
    <div className='form_wrapper'>
      <span className='logo'>React Chat</span>
      <span className='title'>Login</span>
      <form>
        <input type='email' placeholder="Email" />
        <input type='password' placeholder="Password" />
        <button>Login</button>
      </form>
      <p>You don't have an account? <a href='#'>Register</a></p>
    </div>
  </div>
  )
}

export default Login