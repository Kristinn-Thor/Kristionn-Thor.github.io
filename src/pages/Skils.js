//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import NumberAnimation from '../components/NumberAnimation'
import '../styles/Skils.scss';

function Skils() {
    useEffect(() => {
        TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
    }, []);

    let maskRef = useRef(null);
    let javaSkill = 70;
    let htmlSkill = 80;
    let cssSkill = 80;
    let reactSkill = 30;

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask" ref={el => { maskRef = el }}></div>
                    <div className="Skils">
                        <div className="Skils-Container">
                            <h1 className="Skils-Title">Kunnátta</h1>
                            <div className="Skils-JavaScript Skils-Skill">
                                <h3>JavaScript <NumberAnimation from={0} to={javaSkill} duration={1.5} />% </h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-HTML Skils-Skill">
                                <h3>HTML <NumberAnimation from={0} to={htmlSkill} duration={1.5}/>%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-CSS Skils-Skill">
                                <h3>CSS <NumberAnimation from={0} to={cssSkill} duration={1.5} />%</h3>
                                <span className="Skils-Bars"><span className="Bars-Progression"></span></span>
                            </div>
                            <div className="Skils-React Skils-Skill">
                                <h3>React <NumberAnimation from={0} to={reactSkill} duration={1.5} />%</h3>
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