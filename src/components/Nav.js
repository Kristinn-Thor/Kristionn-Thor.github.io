import React from 'react';
import { NavLink } from 'react-router-dom';
//-----Icons-----//
import HomeButton from '../svg/Home-Btn.svg';
//-----Styles-----//
import '../styles/Nav.scss';
//-----Font Awesome Imports-----//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAt, faChartBar, faTasks } from '@fortawesome/free-solid-svg-icons';

function Nav({ lightOn }) {
    return (
        <nav className="Nav">
            <div className="Nav-Grid">
                <NavLink
                    className="Nav-Projects Nav-Link"
                    to="/projects"
                    activeClassName="selected" >
                    <FontAwesomeIcon
                        icon={faTasks}
                        className="Nav-Link-icon"
                        alt="Verkefnin"
                        style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
                </NavLink>
                <NavLink
                    className="Nav-Skills Nav-Link"
                    to="/skils"
                    activeClassName="selected">
                    <FontAwesomeIcon
                        icon={faChartBar}
                        className="Nav-Link-icon"
                        alt="Hvað ég kann"
                        style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
                </NavLink>
                <NavLink
                    className="Nav-HomeBtn Nav-Link Nav-HomeScale"
                    exact to="/"
                    activeClassName="selected">
                    <img src={HomeButton} alt="Heim" />
                </NavLink>
                <NavLink
                    className="Nav-Contact Nav-Link"
                    to="/contact"
                    activeClassName="selected">
                    <FontAwesomeIcon
                        icon={faAt}
                        className="Nav-Link-icon"
                        alt="Hafa samband"
                        style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
                </NavLink>
                <NavLink
                    className="Nav-About Nav-Link"
                    to="/about"
                    activeClassName="selected">
                    <FontAwesomeIcon
                        icon={faAddressCard}
                        className="Nav-Link-icon"
                        alt="Um mig"
                        style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
                </NavLink>
            </div>
            <div className={`Nav-Effect${lightOn ? '--Light-Mode' : ''}`}></div>
        </nav>
    );
}

export default Nav;
