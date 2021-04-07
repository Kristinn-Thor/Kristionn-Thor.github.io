//-----React Import-----//
import React, { useEffect, useRef } from 'react';
import CircleAnimation from '../components/CircleAnimation';
import '../styles/Skils.scss';
//-----GSAP-----//
import { TweenLite } from 'gsap';
//-----Icon Imports-----//
import gsapLogo from '../svg/logo-man.svg';
import reactLogo from '../svg/react-brands.svg';
import cssLogo from '../svg/css3-brands.svg';
import jsLogo from '../svg/js-square-brands.svg';
import htmlLogo from '../svg/html5-brands.svg';
import gitLogo from '../svg/git-brands.svg';
import javaLogo from '../svg/Vector-java.svg';
import npmLogo from '../svg/npm-brands.svg';
//-----Font Awesome Imports-----//
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skils({ lightOn, onToggleLightMode }) {

    useEffect(() => {
        TweenLite.staggerTo(textRef.current, 2, { opacity: '1' }, 0.2);
    }, []);

    let textRef = useRef([]);
    const elementStyle = { opacity: '0' };

    return (
        <div className="Skils">

            <div className="Mask" style={{ opacity: 1, position: 'fixed', top: 0 }}></div>
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

            <div className="Skils-Container">
                <h1
                    className="Skils-Title h1"
                    ref={el => { textRef.current[0] = el }}
                    style={elementStyle}
                >
                    Tæknikunnátta
                </h1>

                <section className="Skils-Section">
                    <p
                        className="Skils-Text"
                        ref={el => { textRef.current[1] = el }}
                        style={elementStyle}
                    >
                        <span>Helstu tæki og tól sem ég unnið með eru eftirfarandi:</span>
                        <br />
                        HTML - CSS - JavaScript - React - node.js - express.js - GraphQL - SQL
                    </p>
                    <div
                        className="Skils-Icon-Container"
                        style={lightOn ? { backgroundColor: 'rgba(20, 20, 50, 0.3)', opacity: '0' } : { opacity: '0' }}
                        ref={el => { textRef.current[2] = el }}
                    >
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={jsLogo}
                            logoScale='75'
                            logoX='12'
                            logoY='12'
                            logoText='JavaScript'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='30'
                            textX='-20'
                            textY='142'
                            circleColor='#f0db4f'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={htmlLogo}
                            logoScale='85'
                            logoX='7'
                            logoY='13'
                            logoText='HTML'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='-3'
                            textY='150'
                            circleColor='#f06529'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={cssLogo}
                            logoScale='80'
                            logoX='10'
                            logoY='13'
                            logoText='CSS'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='15'
                            textY='150'
                            circleColor='#2965f1'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={gsapLogo}
                            logoScale='90'
                            logoX='-5'
                            logoY='5'
                            logoText='GSAP'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='0'
                            textY='150'
                            circleColor='#08D80C'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={reactLogo}
                            logoScale='90'
                            logoX='5'
                            logoY='5'
                            logoText='React'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='-4'
                            textY='150'
                            circleColor='#61DBFB'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={gitLogo}
                            logoScale='90'
                            logoX='5'
                            logoY='5'
                            logoText='git'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='22'
                            textY='147'
                            circleColor='#e84d31'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={javaLogo}
                            logoScale='80'
                            logoX='10'
                            logoY='5'
                            logoText='Java'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='10'
                            textY='147'
                            circleColor='#ea8c10'
                        />
                        <CircleAnimation
                            className="Skils-Skill"
                            from={0}
                            to={360}
                            duration={2}
                            logoSource={npmLogo}
                            logoScale='80'
                            logoX='10'
                            logoY='10'
                            logoText='NPM'
                            textColor={`${lightOn ? '#5562DD' : '#c8c8c8'}`}
                            textSize='40'
                            textX='6'
                            textY='147'
                            circleColor='#c53635'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skils;