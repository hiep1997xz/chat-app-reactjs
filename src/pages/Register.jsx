import React from 'react'
import Add from '../assets/addAvatar.png'

const Register = () => {
  return (
    <div className='form_container'>
      <div className='form_wrapper'>
        <span className='logo'>React Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder="Name" />
          <input type='email' placeholder="Email" />
          <input type='password' placeholder="Password" />
          <input style={{ display: "none" }} type='file' id="file" />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? <a href='#'>Login</a></p>
      </div>
    </div>
  )
}

export default Register