import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/Projects.scss';


function Projects({lightOn}) {
    useEffect(() => {
        TweenMax.fromTo(maskRef, { x: '700', y: '-700' }, { x: '0', y: '0', duration: 1 });
    }, []);

    let maskRef = useRef(null);

    return (
        <>
            <div className={`Background${lightOn ? '--Light-Mode' : ''}`}>
                <div className="Overlay">
                    <div className="Mask" ref={el => { maskRef = el }}></div>
                    <div className="Projects">
                        <div className="Projects-Container">
                            <h1 className="Projects-Title h1">Verkefni</h1>
                            <div className="Projects-List">
                                <div className="Projects-List-Item">Verkefni 1</div>
                                <div className="Projects-List-Item">Verkefni 2</div>
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
}

export default Projects;