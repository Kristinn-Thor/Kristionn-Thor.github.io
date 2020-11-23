//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import {TweenMax} from 'gsap';
import '../styles/Skils.scss';

function Skils() {
    useEffect(() => {
        TweenMax.fromTo(maskRef, {x:'700', y:'-700'}, {x:'0', y:'0', duration: 1});
    },[]);

    let maskRef = useRef(null);

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask" ref={el =>{maskRef=el}}></div>
                    <div className="Skils">
                        <h2>Kunnátta</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skils;