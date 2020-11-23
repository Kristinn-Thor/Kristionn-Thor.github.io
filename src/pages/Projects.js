import React from 'react';
import '../styles/Projects.scss';


function Projects() {
    return (
        <>
            <div className="Background">
                <div className="Overlay">
                    <div className="Mask"></div>
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