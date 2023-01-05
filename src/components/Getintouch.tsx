import React from 'react'
import image from '../assets/getin.png'

type Props = {}



const Getintouch = (props: Props) => {
    const style = {
    backgroundImage: `url(${image})`
  };
  return (
    <div className='getintouch' style={style}>
        <h2>Get in Touch</h2>
        <h6>DISCOVER MORE ABOUT NEWS,EXCLUSIVE EVENTS AND DISCOUNT</h6>
        <div className="getintouch__form">
        <input type="email" placeholder='type your email'></input>
        <button>ok</button>
        </div>
    </div>
  )
}

export default Getintouch