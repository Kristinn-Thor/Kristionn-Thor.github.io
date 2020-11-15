import React from 'react';

function Nav() {
    return (
        <div className="Nav-wrapper">
            <nav className="Nav">
                <div className="Nav-HomeBtn">
                    <button>HOME</button>
                </div>
                <div className="Nav-Projects">Projects</div>
                <div className="Nav-Skills">Skills</div>
                <div className="Nav-Contact">Contact</div>
                <div className="Nav-About">About me</div>
            </nav>
        </div>
    );
}

export default Nav;
