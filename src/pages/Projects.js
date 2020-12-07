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
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


function Projects({ lightOn, onToggleLightMode }) {
    let match = useRouteMatch();
    let maskRef = useRef(null);

    let itemLinkRef = useRef(null);
    let containerRef = useRef(null);
    const handleMouseMove = (e) => {
        let xAxis = ((e.pageX - containerRef.current.getBoundingClientRect().left)) / 5;
        let yAxis = ((e.pageY - containerRef.current.getBoundingClientRect().top)) / 5;
        itemLinkRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }

    useEffect(() => {
        if (match.isExact) { // Only play tween if we render /projects exact page
            TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
        }
    });

    if (match.isExact)
        return (
            <>
                {console.log(match)}
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
                            <div className="Projects-Container" ref={containerRef}>
                                <h1 className="Projects-Title h1">Verkefni</h1>
                                <div className="Projects-List">
                                    <div
                                        className="Projects-List-Item"
                                        onMouseMove={handleMouseMove} >
                                        <Link
                                            to={`${match.url}/game`}
                                            className="Projects-List-Item-Link"
                                            ref={itemLinkRef} >
                                            TickTackToe
                                        </Link>
                                    </div>
                                    <div
                                        className="Projects-List-Item"
                                        onMouseMove={handleMouseMove} >
                                        Verkefni 2
                                    </div>
                                    <div className="Projects-List-Item">Verkefni 3</div>
                                    <div className="Projects-List-Item">Verkefni 4</div>
                                    <div className="Projects-List-Item">Verkefni 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    return (
        <>
            {console.log(match)}
            <Switch>
                <Route path={`${match.path}/game`} component={Game} />
                {/* We can add more routes here */}
            </Switch>
        </>
    )

}

export default Projects;