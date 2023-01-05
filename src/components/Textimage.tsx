import React from 'react'
import image from '../assets/textimage.png'
type Props = {}

const Textimage = (props: Props) => {
  return (
    <div>
        <div className='textimage'>
            <div className='textimage__text'>
                <h3>LONDON COLLECTION SEASON</h3>
                <h1>Temporary Store</h1>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire</p>
                <button>View</button>
            </div>
            <div className='textimage__image'>
                <img src={image} alt="text image" />
            </div>
        </div>
    </div>
  )
}

export default Textimage