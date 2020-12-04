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
    useEffect(() => {
        TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
    }, []);
    let maskRef = useRef(null);

    let match = useRouteMatch();

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
                                <div className="Projects-List-Item"><Link to={`${match.url}/game`} >TickTackToe</Link></div>
                                <div className="Projects-List-Item">Verkefni 2</div>
                                <div className="Projects-List-Item">Verkefni 3</div>
                                <div className="Projects-List-Item">Verkefni 4</div>
                                <div className="Projects-List-Item">Verkefni 5</div>
                            </div>
                        </div>
                        <Switch>
                            <Route path={`${match.path}/game`} component={Game} />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;