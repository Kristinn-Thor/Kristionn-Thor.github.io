//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/Skils.scss';

function Skils() {
    useEffect(() => {
        TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
    }, []);

    let maskRef = useRef(null);
    let javaSkill = 70;
    let htmlSkill = 80;
    let cssSkill = 80;
    let reactSkill = 40;

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask" ref={el => { maskRef = el }}></div>
                    <div className="Skils">
                        <div className="Skils-Container">
                            <h1 className="Skils-Title">Kunnátta</h1>
                            <div className="Skils-JavaScript Skils-Skill">
                                <h3>JavaScript {javaSkill}%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-HTML Skils-Skill">
                                <h3>HTML {htmlSkill}%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-CSS Skils-Skill">
                                <h3>CSS {cssSkill}%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-React Skils-Skill">
                                <h3>React {reactSkill}%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skils;