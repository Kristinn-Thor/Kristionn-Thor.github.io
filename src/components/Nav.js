import React from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../svg/Home-Btn.svg'
import ProjectsButton from '../svg/Projects-Btn.svg'
import SkilsButton from '../svg/Skils-Btn.svg'
import ContactButton from '../svg/Contact-Btn.svg'
import AboutButton from '../svg/About-Btn.svg'


function Nav() {
    return (
        <div className="Nav-wrapper">
            <nav className="Nav">
                <Link className="Nav-HomeBtn Nav-Link" to="/">
                    <img src={HomeButton} alt="Heim" />
                </Link>
                <Link className="Nav-Projects Nav-Link" to="/projects">
                    <img src={ProjectsButton} alt="Verkefnin" />
                </Link>
                <Link className="Nav-Skills Nav-Link" to="/skils">
                    <img src={SkilsButton} alt="Hvað ég kann" />
                </Link>
                <Link className="Nav-Contact Nav-Link" to="/contact">
                    <img src={ContactButton} alt="Hafa samband" />
                </Link>
                <Link className="Nav-About Nav-Link" to="/about">
                    <img src={AboutButton} alt="Um mig" />
                </Link>
            </nav>
        </div>
    );
}

export default Nav;
