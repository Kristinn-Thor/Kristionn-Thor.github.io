import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useState } from 'react';
import { TweenMax } from 'gsap';
import '../styles/About.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

function About({ lightOn, onToggleLightMode }) {

    const [topPosition, setTopPosition] = useState(0);
    const [maskHeight, setMaskHeight] = useState(0);

    useLayoutEffect(() => {
        TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
        TweenMax.staggerTo(textRef.current, 2, { opacity: '1' }, 0.2);
        
        const containerHeight = aboutRef.current.clientHeight;
        console.info('containerHeight: ', containerHeight);
        const maskHeight = listMaskRef.current.clientHeight;
        console.info('maskHeight: ', maskHeight);
        const position = containerHeight - maskHeight;
        console.info('position: ', position);
        setTopPosition(position);
        setMaskHeight(maskHeight);
        console.info('topPosition: ', topPosition);

    }, [topPosition]);

    let maskRef = useRef(null);
    let textRef = useRef([]);
    const textStyle = { opacity: '0', overflow: 'visible' };

    let listMaskRef = useRef(null);
    let aboutRef = useRef(null);
    

    return (
        <>
            <div className={`Background${lightOn ? '--Light-Mode' : ''}`}>
                <div
                    className="Mask"
                    ref={el => { maskRef = el }}>
                </div>

                <div className="About" ref={aboutRef}>
                    <div className="List-Mask" ref={listMaskRef} style={{top: topPosition}}></div>
                    <button
                        title="Toggle dark mode"
                        className="DarkMode-btn"
                        onClick={onToggleLightMode}
                        aria-label="toggle dark mode">
                        <FontAwesomeIcon
                            icon={faAdjust}
                            style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }}>
                        </FontAwesomeIcon>
                    </button>
                    <div className="About-Container" style={{top: -maskHeight}}>
                        <h1
                            className="About-Container-Header h1"
                            ref={el => { textRef.current[0] = el }}
                            style={textStyle}
                        >Um mig
                            </h1>
                        <p
                            className="About-Container-Text"
                            ref={el => { textRef.current[1] = el }}
                            style={textStyle}
                        >
                            Lorem ipsum Quisque sollicitudin et leo vel placerat. Vivamus sed maximus nisi.
                            Duis vestibulum neque et iaculis vehicula. Etiam nunc tortor, bibendum ac rutrum quis, consectetur a risus.
                            Cras mattis tincidunt orci. Fusce consequat a mi at pellentesque.
                            Vivamus commodo magna magna, sit amet rhoncus erat aliquet vitae. Ut viverra aliquam leo.
                            Vestibulum viverra, ante eget cursus rhoncus, nisl quam mollis sem, eu rhoncus tellus nibh id dolor.
                            Vivamus porta leo vitae ipsum sagittis iaculis. In vitae eros nec metus aliquam gravida non ornare purus.
                            Donec porttitor risus vel ex fermentum elementum.
                            </p>
                        <p className="About-Container-Text"
                            ref={el => { textRef.current[2] = el }}
                            style={textStyle}
                        >
                            Lorem ipsum Quisque sollicitudin et leo vel placerat. Vivamus sed maximus nisi.
                            Duis vestibulum neque et iaculis vehicula. Etiam nunc tortor, bibendum ac rutrum quis, consectetur a risus.
                            Cras mattis tincidunt orci. Fusce consequat a mi at pellentesque.
                            Vivamus commodo magna magna, sit amet rhoncus erat aliquet vitae. Ut viverra aliquam leo.
                            Vestibulum viverra, ante eget cursus rhoncus, nisl quam mollis sem, eu rhoncus tellus nibh id dolor.
                            Vivamus porta leo vitae ipsum sagittis iaculis. In vitae eros nec metus aliquam gravida non ornare purus.
                            Donec porttitor risus vel ex fermentum elementum.
                            </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;