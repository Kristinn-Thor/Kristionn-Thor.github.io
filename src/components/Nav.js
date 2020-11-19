import React from 'react';
import { NavLink } from 'react-router-dom';
//-----Icons-----//
import HomeButton from '../svg/Home-Btn.svg';
import ProjectsButton from '../svg/Projects-Btn.svg';
import SkilsButton from '../svg/Skils-Btn.svg';
import ContactButton from '../svg/Contact-Btn.svg';
import AboutButton from '../svg/About-Btn.svg';
//-----Styles-----//
import '../styles/Nav.scss';

function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav-Grid">
                <NavLink className="Nav-Projects Nav-Link" to="/projects" activeClassName="selected">
                    <img className="Nav-Link-img" src={ProjectsButton} alt="Verkefnin" />
                </NavLink>
                <NavLink className="Nav-Skills Nav-Link" to="/skils" activeClassName="selected">
                    <img className="Nav-Link-img" src={SkilsButton} alt="Hvað ég kann" />
                </NavLink>
                <NavLink className="Nav-HomeBtn Nav-Link" exact to="/" activeClassName="selected">
                    <img src={HomeButton} alt="Heim" />
                </NavLink>
                <NavLink className="Nav-Contact Nav-Link" to="/contact" activeClassName="selected">
                    <img className="Nav-Link-img" src={ContactButton} alt="Hafa samband" />
                </NavLink>
                <NavLink className="Nav-About Nav-Link" to="/about" activeClassName="selected">
                    <img className="Nav-Link-img" src={AboutButton} alt="Um mig" />
                </NavLink>
            </div>
            <div className="Nav-Effect"></div>
        </nav>
    );
}

export default Nav;
