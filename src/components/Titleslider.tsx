import React, { useState } from 'react'
import image from '../assets/image.png'
import image2 from '../assets/image2.png'

type Props = {}

const Titleslider = (props: Props) => {
    const element = [
        {
            day: '18 SETTEMBRE 2022',
            title:'Most Important Days on Watchlab',
            image: image
        },
        {
            day: '23 SETTEMBRE 2022',
            title:'Winner Of Best Manifacture',
            image: image2,
        }
    ];

    const [state, setState] = useState({
        day:element[0].day,
        title: element[0].title,
        image: element[0].image
    });

    const changeBackground = () => {
        const currentIndex = element.findIndex(bg => bg.image === state.image);
        const nextIndex = (currentIndex + 1) % element.length;
            setState({
            day: element[nextIndex].day,
            title: element[nextIndex].title,
            image: element[nextIndex].image
        }); 
    }
    const changeBackgroundPrev = () => {
        const currentIndex = element.findIndex(bg => bg.image === state.image);
        const nextIndex = (currentIndex - 1) % element.length;
            setState({
            day: element[nextIndex].day,
            title: element[nextIndex].title,
            image: element[nextIndex].image
        }); 
    }
  return (
    <div className='titleslider'>
        <div className='titleslider__left'>
            <h3>Press from Watch Lab Studio</h3>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain trouble</p>
        </div>
        <div className='titleslider__right'>
            <div className='titleslider__right__image'>
                <img src={state.image} alt="" />
            </div>
            <div className='titleslider__right__text'>
                <h5>PRESS</h5> 
                <h6>{state.day}</h6>
                <h2>{state.title}</h2>
                <div className='titleslider__right__text__arrow'>
                <div onClick={changeBackground}> &lt; </div> 
                <div onClick={changeBackground}> &gt; </div> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Titleslider