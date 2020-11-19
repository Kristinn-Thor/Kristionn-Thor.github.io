import React from 'react';
import './App.scss';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/skils" component={Skils} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      </Switch>
      <Nav />
    </div>
    </Router>
  );
}

export default App;
