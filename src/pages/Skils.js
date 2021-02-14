//-----React Import-----//
import React from 'react';
import CircleAnimation from '../components/CircleAnimation';
import '../styles/Skils.scss';
//-----Icon Imports-----//
import gsapLogo from '../svg/logo-man.svg';
import reactLogo from '../svg/react-brands.svg';
import cssLogo from '../svg/css3-brands.svg';
import jsLogo from '../svg/js-square-brands.svg';
import htmlLogo from '../svg/html5-brands.svg';
//-----Font Awesome Imports-----//
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skils({ lightOn, onToggleLightMode }) {

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

            <h1 className="Skils-Title h1">Kunnátta</h1>

            <div className="Skils-Container" style={lightOn ? { backgroundColor: 'rgba(25, 106, 153, 0.2)' } : {}}>
                <CircleAnimation
                    className="Skils-Skill"
                    from={0}
                    to={360}
                    duration={1}
                    logoSource={jsLogo}
                    logoScale='75'
                    logoX='12'
                    logoY='12'
                    logoText='JavaScript'
                    textColor='#FFF'
                    textSize='30'
                    textX='-20'
                    textY='142'
                    circleColor='#f0db4f'
                />
                <CircleAnimation
                    className="Skils-Skill"
                    from={0}
                    to={360}
                    duration={1}
                    logoSource={htmlLogo}
                    logoScale='85'
                    logoX='7'
                    logoY='13'
                    logoText='HTML'
                    textColor='#FFF'
                    textSize='40'
                    textX='-3'
                    textY='150'
                    circleColor='#f06529'
                />
                <CircleAnimation
                    className="Skils-Skill"
                    from={0}
                    to={360}
                    duration={1}
                    logoSource={cssLogo}
                    logoScale='80'
                    logoX='10'
                    logoY='13'
                    logoText='CSS'
                    textColor='#FFF'
                    textSize='40'
                    textX='15'
                    textY='150'
                    circleColor='#2965f1'
                />
                <CircleAnimation
                    className="Skils-Skill"
                    from={0}
                    to={360}
                    duration={1}
                    logoSource={gsapLogo}
                    logoScale='90'
                    logoX='-5'
                    logoY='5'
                    logoText='GSAP'
                    textColor='#FFF'
                    textSize='40'
                    textX='0'
                    textY='150'
                    circleColor='#08D80C'
                />
                <CircleAnimation
                    className="Skils-Skill"
                    from={0}
                    to={360}
                    duration={1}
                    logoSource={reactLogo}
                    logoScale='90'
                    logoX='5'
                    logoY='5'
                    logoText='React'
                    textColor='#FFF'
                    textSize='40'
                    textX='-4'
                    textY='150'
                    circleColor='#61DBFB'
                />
            </div>
        </div>
    );
}

export default Skils;