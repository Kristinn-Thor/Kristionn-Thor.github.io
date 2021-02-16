import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';
import '../styles/About.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

function About({ lightOn, onToggleLightMode }) {

    useEffect(() => {
        TweenLite.staggerTo(textRef.current, 2, { opacity: '1' }, 0.2);
    }, []);

    let textRef = useRef([]);
    const textStyle = { opacity: '0' };

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
                        <span>
                            Aðal áhugasvið er vefhönnun og notendaviðmót. Með það markmið að bæta
                            notendaupplifun og gera hönnun skalanlega.
                        </span>
                        <span>Metnaðarfullur, vandvirkur og með auga fyrir smáatriðum.</span>
                        <span>Önnur áhugamál eru hlaup🏃‍♂️, líkamsrækt🏋️ og fjallgöngur⛰️.</span>
                    </p>
                </div>
            </div>
    );
}

export default About;