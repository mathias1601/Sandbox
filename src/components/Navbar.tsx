import { useState } from 'react'; 
import { NavLink} from 'react-router-dom';
import '../css/navbar.css' 
import sandboxIcon from '../assets/sandbox_icon.png';
import "@fontsource/lexend-deca";
import { Dropdown } from 'react-bootstrap';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="custom-navbar">
      <h1>
        <img width={50} src={sandboxIcon} alt="" />
      </h1>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* Unicode hamburger icon */}
      </div>

      {/* Nav Links */}
      <div className={`button-container ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/Home"
          className={({ isActive }) => isActive ? "custom-navbar-button active-button" : "custom-navbar-button"}
        >
          Home
        </NavLink>
        <NavLink
          to="/CV"
          className={({ isActive }) => isActive ? "custom-navbar-button active-button" : "custom-navbar-button"}
        >
          CV
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) => isActive ? "custom-navbar-button active-button" : "custom-navbar-button"}
        >
          Projects
        </NavLink>

        <div className='custom-dropdown'>
            <NavLink to='/Games' className={({ isActive }) => isActive ? "custom-navbar-button active-button" : "custom-navbar-button"}>
            Games
            </NavLink>

            <div className='dropdown-arrow'>
                <Dropdown>
                    <Dropdown.Toggle className='custom-dropdown-toggle' />
                    <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/MemorizeWordGame">Word memory</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/NumberMemory">Number memory</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/Trivia">Trivia</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar