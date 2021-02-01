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
        <nav className={`Nav${lightOn ? '--Light-Mode' : ''}`}>
            <NavLink
                className="Nav-Projects Nav-Link"
                to="/projects" >
                <FontAwesomeIcon
                    icon={faTasks}
                    className="Nav-Link-icon"
                    alt="Verkefnin"
                    style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
            </NavLink>
            <NavLink
                className="Nav-Skills Nav-Link"
                to="/skils" >
                <FontAwesomeIcon
                    icon={faChartBar}
                    className="Nav-Link-icon"
                    alt="Hvað ég kann"
                    style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
            </NavLink>
            <NavLink
                className="Nav-HomeBtn Nav-Link"
                exact to="/" >
                <img src={HomeButton} alt="Heim" />
            </NavLink>
            <NavLink
                className="Nav-Contact Nav-Link"
                to="/contact" >
                <FontAwesomeIcon
                    icon={faAt}
                    className="Nav-Link-icon"
                    alt="Hafa samband"
                    style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
            </NavLink>
            <NavLink
                className="Nav-About Nav-Link"
                to="/about" >
                <FontAwesomeIcon
                    icon={faAddressCard}
                    className="Nav-Link-icon"
                    alt="Um mig"
                    style={{ color: `${lightOn ? '#293AD9' : '#29D9B9'}` }} />
            </NavLink>
        </nav>
    );
}

export default Nav;
