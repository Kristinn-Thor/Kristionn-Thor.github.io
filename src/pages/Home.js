//-----React Import-----//
import React, { useEffect, useRef } from 'react';
//-----Style Import-----//
import '../styles/Home.scss';
//-----GSAP Import-----//
import { TweenMax } from 'gsap';
import { gsap } from 'gsap';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

function Home({ lightOn, onToggleLightMode }) {
    useEffect(() => {
        gsap.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', opacity: 1, duration: 1 });
        TweenMax.staggerTo(textRef.current, 2, { opacity: 1 }, 0.3);
    }, []);

    let maskRef = useRef(null);
    let textRef = useRef([]);
    const textStyle = { opacity: 0 };

    return (
        <div className="Home">
            <div className="Mask" ref={el => { maskRef = el }}></div>
            <button
                title="Toggle dark mode"
                className="DarkMode-btn"
                onClick={onToggleLightMode}
                aria-label="toggle dark mode">
                <FontAwesomeIcon
                    icon={faAdjust}
                    style={{ color: `${lightOn ? '#5562DD' : '#29D9B9'}` }}>
                </FontAwesomeIcon>
            </button>
            <section className="Home-Section">
                <h1
                    className="Home-Section-Title"
                    ref={el => { textRef.current[0] = el }}
                    style={textStyle}
                >
                    Velkominn
                </h1>
                <h3
                    className="Home-Section-Text"
                    ref={el => { textRef.current[1] = el }}
                    style={textStyle}
                >
                    Hæ, ég heiti Kristinn og er vefforritari.
                </h3>
            </section>
        </div>
    );
}

export default Home;
