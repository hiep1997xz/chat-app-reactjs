import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>React Chat</div>
      <div className='user'>
        <img src='https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg' alt='' />
        <span>Example</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar