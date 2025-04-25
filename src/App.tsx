import { Link, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css'
import './css/navbar.css' 
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import MemorizeWordGame from './Pages/MemorizeWordGame';
import GroceryGuessr from './Pages/GroceryGuessr';
import NumberMemory from './Pages/NumberMemory';
import Trivia from './Pages/Trivia';
import sandboxIcon from './assets/sandbox_icon.png';
import "@fontsource/lexend-deca";
import { Dropdown } from 'react-bootstrap';
import Games from './Pages/Games';

function App() {

  return (
    <>
      <div className="custom-navbar">
        <h1>
            <img width={50} src={sandboxIcon}alt="" />
        </h1>
        <div className='button-container'>
        
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
              <Dropdown>
                <NavLink to='/Games' className='custom-dropdown-button'>Games</NavLink>
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
        <Routes>
          <Route path="/Sandbox" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<div className='main'><Home /></div>} />
          <Route path="/CV" element={<div className='main'><CV /></div>} />
          <Route path="/Projects" element={<div className='main'><Projects /></div>} />

          {/* Games are now attached to a dropdown, most likely drop GroceryGuessr */}

          <Route path="/MemorizeWordGame" element={<div className='main'><MemorizeWordGame /></div>} />
          <Route path="/GroceryGuessr" element={<div className='main'><GroceryGuessr /></div>} />
          <Route path="/NumberMemory" element={<div className='main'><NumberMemory /></div>} />
          <Route path="/Trivia" element={<div className='main'><Trivia /></div>} /> 
          <Route path="/Games" element={<div className='main'><Games /></div>} />
        </Routes>
    
    </>
  )
}

export default App
