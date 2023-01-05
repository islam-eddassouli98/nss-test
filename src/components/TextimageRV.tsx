import React from 'react'
import image from '../assets/textimagerv.png'

type Props = {}

const TextimageRV = (props: Props) => {
  return (
    <div>
        <div className='textimage' id="rv">
        <div className='textimage__image'>
                <img src={image} alt="text image" />
            </div>
            <div className='textimage__text'>
                <h3>LONDON COLLECTION SEASON</h3>
                <h1>New Collection Henry London</h1>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
                <button>View</button>
            </div>
            
        </div>
    </div>
  )
}

export default TextimageRV