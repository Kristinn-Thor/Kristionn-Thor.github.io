import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/Contact.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact({ lightOn, onToggleLightMode }) {
    useEffect(() => {
        TweenMax.staggerFromTo(
            textRef.current,
            0.6, // Duration
            // From
            {
                x: '-700'
            },
            // To
            {
                x: '0',
                opacity: '1',
            },
            0.1 // Stagger time
        );
    }, []);

    let textRef = useRef([]);
    const textStyle = { opacity: 0 };

    return (
        <div className="Contact">
            <div className="Mask" style={ {opacity: 1, position: 'fixed', top:0} }></div>
            <button
                title="Toggle dark mode"
                className="DarkMode-btn"
                onClick={onToggleLightMode}
                aria-label="toggle dark mode">
                <FontAwesomeIcon
                    icon={faAdjust}
                    style={{ color: `${lightOn ? '#5562DD' : '#29D9B9'}` }} />
            </button>
            <h1
                className="Contact-Title h1"
                ref={el => { textRef.current[0] = el }}
                style={textStyle}>
                Vertu í bandi
                        </h1>
            <ul className="Contact-Info">
                <li
                    ref={el => { textRef.current[1] = el }}
                    style={textStyle}>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: `${lightOn ? '#5562DD' : '#29D9B9'}` }}
                        className="icon icon-contact" />
                                kristinn713@gmail.com
                            </li>
                <li
                    ref={el => { textRef.current[2] = el }}
                    style={textStyle}>
                    <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: `${lightOn ? '#5562DD' : '#29D9B9'}` }}
                        className="icon icon-contact" />
                                691-3314
                            </li>
            </ul>
        </div>
    );
}

export default Contact;
