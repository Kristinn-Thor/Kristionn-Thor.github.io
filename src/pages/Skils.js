//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import NumberAnimation from '../components/NumberAnimation';
import BarAnimation from '../components/BarAnimation';
import '../styles/Skils.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);

function Skils({lightOn}) {
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
            <div className={`Background${lightOn ? '--Light-Mode' : ''}`}>
                <div className="Overlay">
                    <div className="Mask" ref={el => { maskRef = el }}></div>
                    <div className="Skils">
                        <div className="Skils-Container">
                            <h1 className="Skils-Title h1">Kunnátta</h1>
                            <div className="Skils-Skill">
                                <h3 className="Skils-Skill-Title h3">
                                    <FontAwesomeIcon icon={['fab', 'js-square']} className="icon fa-js" />
                                    JavaScript
                                    <span className="Skils-NumberAnimation">
                                        <NumberAnimation from={0} to={javaSkill} duration={1.5} />%
                                    </span>
                                </h3>
                                <span className="Skils-Bars-Container">
                                    <BarAnimation from={0} to={javaSkill} duration={1.5} name="Skils-Bars-java Skils-Bars"></BarAnimation>
                                </span>
                            </div>
                            <div className="Skils-Skill">
                                <h3 className="Skils-Skill-Title h3">
                                    <FontAwesomeIcon icon={['fab', 'html5']} className="icon fa-html" />
                                    HTML
                                    <span className="Skils-NumberAnimation">
                                        <NumberAnimation from={0} to={htmlSkill} duration={1.5} />%
                                    </span>
                                </h3>
                                <span className="Skils-Bars-Container">
                                    <BarAnimation from={0} to={htmlSkill} duration={1.5} name="Skils-Bars-html Skils-Bars"></BarAnimation>
                                </span>
                            </div>
                            <div className="Skils-Skill">
                                <h3 className="Skils-Skill-Title h3">
                                    <FontAwesomeIcon icon={['fab', 'css3']} className="icon fa-css" />
                                    CSS
                                    <span className="Skils-NumberAnimation">
                                        <NumberAnimation from={0} to={cssSkill} duration={1.5} />%
                                    </span>
                                </h3>
                                <span className="Skils-Bars-Container">
                                    <BarAnimation from={0} to={cssSkill} duration={1.5} name="Skils-Bars-css Skils-Bars"></BarAnimation>
                                </span>
                            </div>
                            <div className="Skils-Skill">
                                <h3 className="Skils-Skill-Title h3">
                                    <FontAwesomeIcon icon={['fab', 'react']} className="icon fa-react" />
                                    React
                                    <span className="Skils-NumberAnimation">
                                        <NumberAnimation from={0} to={reactSkill} duration={1.5} />%
                                    </span>
                                </h3>
                                <span className="Skils-Bars-Container">
                                    <BarAnimation from={0} to={reactSkill} duration={1.5} name="Skils-Bars-react Skils-Bars"></BarAnimation>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skils;