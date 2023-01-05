import React from 'react'
import discovery from '../assets/discovery.png'
import discovery1 from '../assets/discovery1.png'
import discovery2 from '../assets/discovery2.png'
import discovery3 from '../assets/discovery3.png'
import discovery4 from '../assets/discovery4.png'

type Props = {}

const Discovery = (props: Props) => {
  return (
    <div className='discovery'>
        <div className='discovery__left'>
            <div className='discovery__left__image'>
                <img src={discovery} alt="" />
                <div className='discovery__left__image__title'>
                    <h5>INSTAGRAM</h5>
                    <h3>Discover Watch LAB</h3> 
                </div>
            </div>
        </div>
        <div className='discovery__right'>
            <div className='discovery__right__top'>
            <img src={discovery1} alt="" />
            <img src={discovery2} alt="" />

            </div>
            <div className='discovery__right__bottom'>
            <img src={discovery3} alt="" />
            <img src={discovery4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Discovery