import './Nav.css'

function Nav() {
    return (
        <nav className="Nav">
            <div className="Nav-HomeBtn">
                <button>HOME</button>
            </div>
            <ul className="Nav-Links">
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>About me</li>
            </ul>
        </nav>
    );
}

export default Nav;
