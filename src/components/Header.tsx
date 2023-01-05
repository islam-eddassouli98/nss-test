import React, { useState } from 'react'
import '../styles/App.scss';
import { FiSearch } from "react-icons/fi";
import mainLogo from '../assets/LAB.png';
import mainLogoMobile from '../assets/LAB-mobile.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";



type Props = {}

const Header = (props: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = ['About Us', 'Brands', 'Projects', 'Magazine', 'Press', 'Contacts']



    return (
        <>
            <div className='header'>
                <div className='header__logo'>
                    <div className="header__logo__image">
                        <img src={mainLogo} alt="logo" />
                    </div>

                </div>
                <div className='header__menu'>
                    <ul className='header__menu__list'>
                        {menuItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='header__search'>
                    <input type="search" className="header__search__input" name="" placeholder=""></input>
                    <FiSearch />
                </div>
            </div>
            <div className='header__mobile'>
                <div className='header__mobile__first'>
                    <div className='header__mobile__first__logo'>
                        <div className="header__mobile__first__logo__image">
                            <img src={mainLogoMobile} alt="logo" />
                        </div>
                    </div>
                    <div className='header__mobile__first__menu'>
                        {!menuOpen ? (<RxHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />) : (<AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} />)}
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className='header__mobile__option'>
                    <div className='header__mobile__option__search'>
                        <input type="search" className="header__mobile__option__search__input" name="" placeholder=""></input>
                        <FiSearch />
                    </div>
                    <div className='header__mobile__option__menu'>
                        <ul className='header__mobile__option__menu__list'>
                            {menuItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header