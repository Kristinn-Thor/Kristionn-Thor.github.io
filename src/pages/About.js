import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/About.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

function About({ lightOn, onToggleLightMode }) {

    useEffect(() => {
        TweenMax.staggerTo(textRef.current, 2, { opacity: '1' }, 0.2);
    }, []);

    let textRef = useRef([]);
    const textStyle = { opacity: '0', overflow: 'visible' };

    return (
            <div className="About">
                <div className="Mask" style={ {opacity: 1, position: 'fixed', top:0} }></div>
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
                <div className="About-Container">
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
    );
}

export default About;