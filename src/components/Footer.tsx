import React from 'react'
import logo from '../assets/LAB.png'

type Props = {}

const menuItems = [
    ['Watch/Lab - Innovation brings success', 'Via Borgogna 5, Milan Italy'],
    ['About Us', 'Brand', 'Projects', 'Magazine'],
    ['Press', 'Contacts', 'Privacy Policy', 'Search'],
    ['T. +39 392 9133937', 'M. info@watch-lab.it', 'FACEBOOK', 'INSTAGRAM']
  ];

const Footer = (props: Props) => {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={logo} alt="" />
        </div>
        <div className='footer__menu'>
            {menuItems.map((column) => (
            <ul style={{ display: 'inline-block' }}>
            {column.map((item) => (
                item === 'FACEBOOK' || item === 'INSTAGRAM' ? <li style={{ fontFamily: 'Montserrat, sans-serif' }} key={item}>{item}</li> : <li key={item}>{item}</li>
            ))}
            </ul>
        ))}
        </div>
        <div className='footer__privacy'>
            <div className='footer__privacy__policy'>
                <div>Copyright Watch/Lab all rights reserved</div>
                <div>website by nssfactory</div>
            </div>
        </div>
        <div className='footer__mobile'>
            <div className='footer__mobile__menu'>
            {menuItems.map((column,i) => (
            i  === 2 || i === 1 ?
            i === 1 ? <ul style={{ textAlign: 'start' }}> 
            {column.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>
            :<ul style={{ textAlign: 'end' }}>
                {column.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>
            : null
            ))}
            </div>
        </div>
        <div className='footer__contact'>
        {menuItems.map((column,i) => (
            i  === 0 || i === 3 ?
             <ul> 
            {column.map((item) => (
               item === 'FACEBOOK' || item === 'INSTAGRAM' ? <li style={{ fontFamily: 'Montserrat, sans-serif' }} key={item}>{item}</li> : <li key={item}>{item}</li>
            ))}
            </ul>
            : null
            ))}
        </div>

    </div>
  )
}

export default Footer