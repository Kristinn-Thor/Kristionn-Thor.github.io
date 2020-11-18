import React from 'react';
import { Link } from 'react-router-dom';
//-----Icons-----//
import HomeButton from '../svg/Home-Btn.svg';
import ProjectsButton from '../svg/Projects-Btn.svg';
import SkilsButton from '../svg/Skils-Btn.svg';
import ContactButton from '../svg/Contact-Btn.svg';
import AboutButton from '../svg/About-Btn.svg';
//-----Styles-----//
import '../styles/Nav.css';

function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav-Grid">
                <Link className="Nav-Projects Nav-Link" to="/projects">
                    <img className="Nav-Link-img" src={ProjectsButton} alt="Verkefnin" />
                </Link>
                <Link className="Nav-Skills Nav-Link" to="/skils">
                    <img className="Nav-Link-img" src={SkilsButton} alt="Hvað ég kann" />
                </Link>
                <Link className="Nav-HomeBtn Nav-Link" to="/">
                    <img src={HomeButton} alt="Heim" />
                </Link>
                <Link className="Nav-Contact Nav-Link" to="/contact">
                    <img className="Nav-Link-img" src={ContactButton} alt="Hafa samband" />
                </Link>
                <Link className="Nav-About Nav-Link" to="/about">
                    <img className="Nav-Link-img" src={AboutButton} alt="Um mig" />
                </Link>
            </div>
            <div className="Nav-Effect"></div>
        </nav>
    );
}

export default Nav;
