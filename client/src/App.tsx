import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css'
import './css/navbar.css' 
import CV from './Pages/CV';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import MemorizeWordGame from './Pages/MemorizeWordGame';
import GroceryGuessr from './Pages/GroceryGuessr';
import NumberMemory from './Pages/NumberMemory';
import Trivia from './Pages/Trivia';
import "@fontsource/lexend-deca";
import Games from './Pages/Games';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <div>
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
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
