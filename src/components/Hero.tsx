import React, { Suspense, useEffect, useState } from 'react'
import sfondo from '../assets/sfondo1.jpg';
import sfondo2 from '../assets/sfondo2.jpg';
import sfondoNext from '../assets/sfondo-next.png'
import sfondoNext2 from '../assets/sfondo-next1.png'
import { motion } from "framer-motion"


type Props = {}

const Hero = (props: Props) => {
    const [movement, setMovement] = useState(false)
    
    const backgrounds = [
        {
            subtitle: 'LONDON COLLECTION SEASON',
            title: 'New Selection Of Henry London',
            paragraph: 'An estimable experience in the modern collection house',
            background: sfondo
        },
        {
            subtitle: 'LONDON COLLECTION SEASON',
            title: 'The Path to Success with Watchlab',
            paragraph: 'An estimable experience in the modern collection house',
            background: sfondo2
        }
    ];
    const backgroundsNext = [
        {
            title: 'The Path to Success with Watchlab',
            background: sfondoNext2
        },
        {
            title: 'New Selection Of Henry London',
            background: sfondoNext
        }
    ];
    const [state, setState] = useState({
        subtitle: backgrounds[0].subtitle,
        title: backgrounds[0].title,
        paragraph: backgrounds[0].paragraph,
        background: backgrounds[0].background
    });

    
    const [statenext, setStatenext] = useState({
        title: backgroundsNext[0].title,
        background: backgroundsNext[0].background
    });


    const style = {
        backgroundImage: `url(${state.background})`
    };
    const stylenext = {
        backgroundImage: `url(${statenext.background})`
    }


    const changeBackground = () => {
        setMovement(true);
        const currentIndex = backgrounds.findIndex(bg => bg.background === state.background);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
            setTimeout(() => {
                setState({
                    subtitle: backgrounds[nextIndex].subtitle,
                    title: backgrounds[nextIndex].title,
                    paragraph: backgrounds[nextIndex].paragraph,
                    background: backgrounds[nextIndex].background
                });
                setMovement(false);
            }, 300);

        setStatenext({
            title: backgroundsNext[nextIndex].title,
            background: backgroundsNext[nextIndex].background
        })
    };
    return (
        <>
            <div className='hero'>
                <div className="hero__image" style={style}>
                    <h3>{state.subtitle}</h3>
                    {movement ? 
                    (<motion.h1
                        initial={{ x: 0,opacity: 1}}
                        animate={{ x: 20,opacity: 0 }}
                        exit={{ 
                            opacity: 0,
                            transition:{duration:1},
                            type: 'tween'
                        }}
                    >{state.title}</motion.h1>) : (<motion.h1
                        initial={{ x: 20,opacity: 0, }}
                        animate={{ x: 0,opacity: 1 }}
                        exit={{ 
                            opacity: 1,
                            transition:{duration:1},
                            type: 'tween'
                        }}
                    >{state.title}</motion.h1>)
                    
                    }
                    
                    <p>{state.paragraph}</p>
                    <button >Discover</button>
                </div>
                <div className='hero__next' onClick={changeBackground} style={stylenext}>
                    <h3>{statenext.title}</h3>
                    <h4 className='hero__next__button'> Next &gt; </h4>
                </div>
                <div className='hero__next__mobile' onClick={changeBackground}>
                    <h4 className='hero__next__button'> Next &gt; </h4>
                </div>
            </div>
        </>
    )
}

export default Hero