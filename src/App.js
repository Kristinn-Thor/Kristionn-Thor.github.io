import React from 'react';
import './App.css';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Projects />
      <Skils />
      <Contact />
      <About />
      <Nav />
    </div>
  );
}

export default App;
