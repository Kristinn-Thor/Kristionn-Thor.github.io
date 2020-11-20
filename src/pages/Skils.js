//-----React Import-----//
import React, {useEffect} from 'react';

function Skils() {
    useEffect(()=>
    console.log('Halló Skils')
    )

    return (
        <div className="Skils">
            <div className="Background">
                <div className="Overlay">
                    <h2>Kunnátta</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skils;