import React from 'react';

function Nav() {
    return (
        <div className="Nav-wrapper">
            <nav className="Nav">
                <div className="Nav-HomeBtn">
                    <button>HOME</button>
                </div>
                <div className="Nav-Projects">
                    <button>Projects</button>
                </div>
                <div className="Nav-Skills">
                    <button>Skills</button>
                </div>
                <div className="Nav-Contact">
                    <button>Contact</button>
                </div>
                <div className="Nav-About">
                    <button>About me</button>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
