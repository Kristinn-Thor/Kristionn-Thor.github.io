import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import '../styles/Projects.scss';


function Projects() {
    useEffect(() => {
        TweenMax.fromTo(maskRef, {x:'700', y:'-700'}, {x:'0', y:'0', duration: 1});
    },[]);

    let maskRef = useRef(null);

    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask" ref={el =>{maskRef=el}}></div>
                    <div className="Projects">
                        <h2>Verkefni</h2>
                        <div className="Projects-container">
                            <div>Verkefni 1</div>
                            <div>Verkefni 2</div>
                            <div>Verkefni 3</div>
                            <div>Verkefni 4</div>
                            <div>Verkefni 5</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;