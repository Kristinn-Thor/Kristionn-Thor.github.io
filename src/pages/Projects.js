import React, { useEffect, useRef } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Game from '../components/TickTackToeGame';
//-----GSAP-----//
import { TweenMax } from 'gsap';
//-----Styles-----//
import '../styles/Projects.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faGamepad } from '@fortawesome/free-solid-svg-icons';


function Projects({ lightOn, onToggleLightMode }) {
    let match = useRouteMatch();
    let maskRef = useRef(null);


    const handleMouseEnter = (e) => {
        e.currentTarget.style.transition = 'none';
    }

    const handleMouseMove = (e) => {
        let xAxis = ((e.currentTarget.offsetWidth / 2) - (e.pageX - e.currentTarget.getBoundingClientRect().left)) / 15;
        let yAxis = ((e.pageY - e.currentTarget.getBoundingClientRect().top) - (e.currentTarget.offsetHeight / 2)) / 5;

        e.currentTarget.style.transform = `perspective(300px) scale(1.08) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transition = 'all .5s ease';
        e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateX(0px)';
    }

    useEffect(() => {
        if (match.isExact) { // Only play tween if we render /projects exact page
            TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
        }
    });

    if (match.isExact)
        return (
            <>
                <div className={`Background${lightOn ? '--Light-Mode' : ''}`}>
                    <div className="Overlay">
                        <div className="Mask" ref={el => { maskRef = el }}></div>
                        <div className="Projects">
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
                            <div className="Projects-Container">
                                <h1 className="Projects-Title h1">Verkefni</h1>
                                <div className="Projects-List">
                                    <Link
                                        className={`Projects-List-Item${lightOn ? ' Projects-List-Item-LM' : ''}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        to={`${match.url}/game`} >
                                        <FontAwesomeIcon icon={faGamepad} style={{fontSize: '5em'}} />
                                    </Link>
                                    <div
                                        className={`Projects-List-Item${lightOn ? ' Projects-List-Item-LM' : ''}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} >
                                        Verkefni 2
                                    </div>
                                    <div
                                        className={`Projects-List-Item${lightOn ? ' Projects-List-Item-LM' : ''}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} >
                                        Verkefni 3
                                    </div>
                                    <div
                                        className={`Projects-List-Item${lightOn ? ' Projects-List-Item-LM' : ''}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} >
                                        Verkefni 4
                                    </div>
                                    <div
                                        className={`Projects-List-Item${lightOn ? ' Projects-List-Item-LM' : ''}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave} >
                                        Verkefni 5
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    return (
        <>
            <Switch>
                <Route path={`${match.path}/game`} component={Game} />
                {/* We can add more routes here */}
            </Switch>
        </>
    )

}

export default Projects;