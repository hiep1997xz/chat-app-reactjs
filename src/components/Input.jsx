import React from 'react'
import Img from '../assets/img.png'
import Attach from '../assets/attach.png'

const Input = () => {
  return (
    <div className="input">
      <input className="text" placeholder="Type something....." />
      <div className='send'>
        <img src={Attach} alt='' />
        <input style={{ display: 'none' }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
