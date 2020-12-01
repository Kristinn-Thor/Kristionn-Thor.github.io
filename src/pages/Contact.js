import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/Contact.scss';

function Contact({lightOn}) {
    useEffect(() => {
        TweenMax.fromTo(maskRef, {x:'700', y:'-700'}, {x:'0', y:'0', duration: 1});
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
    },[]);

    let maskRef = useRef(null);
    let textRef = useRef([]);
    const textStyle = { opacity: 0};

    return (
        <>
            <div className={`Background${lightOn ? '--Light-Mode' : ''}`}>
                <div className="Overlay">
                <div className="Mask" ref={el =>{maskRef=el}}></div>
                    <div className="Contact">
                        <h1 className="Contact-Title h1" ref={el => {textRef.current[0] = el}} style={textStyle}>Vertu í bandi</h1>
                        <ul className="Contact-Info">
                            <li ref={el => {textRef.current[1] = el}} style={textStyle}>kristinn713@gmail.com</li>
                            <li ref={el => {textRef.current[2] = el}} style={textStyle}>691-3314</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
