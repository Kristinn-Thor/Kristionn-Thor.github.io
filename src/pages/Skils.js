//-----React Import-----//
import React from 'react';
import NumberAnimation from '../components/NumberAnimation';
import BarAnimation from '../components/BarAnimation';
import '../styles/Skils.scss';
//-----Icon Imports-----//
import gsapLogo from '../svg/logo-man.svg';
//-----Font Awesome Imports-----//
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);

function Skils({ lightOn, onToggleLightMode }) {

    const javaSkill = 70;
    const htmlSkill = 80;
    const cssSkill = 80;
    const reactSkill = 30;
    const gsapSkill = 40;

    return (
        <div className="Skils">
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
            <h1 className="Skils-Title h1">Kunnátta</h1>
            <div className="Skils-Container" style={lightOn ? { backgroundColor: 'rgba(25, 106, 153, 0.2)' } : {}}>
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
                <div className="Skils-Skill">
                    <h3 className="Skils-Skill-Title h3">
                        <img className="icon icon-gsap" alt="GSAP Logo" src={gsapLogo}></img>
                                    GSAP
                                    <span className="Skils-NumberAnimation">
                            <NumberAnimation from={0} to={gsapSkill} duration={1.5} />%
                                    </span>
                    </h3>
                    <span className="Skils-Bars-Container">
                        <BarAnimation from={0} to={gsapSkill} duration={1.5} name="Skils-Bars-gsap Skils-Bars"></BarAnimation>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Skils;