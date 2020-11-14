import React from 'react';
import './App.css'
import Contact from './pages/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <h1>
        Halló heimur!
      </h1>
      <Contact />
      <Nav />
    </div>
  );
}

export default App;
