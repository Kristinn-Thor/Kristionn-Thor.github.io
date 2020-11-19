import React from 'react';
import './App.scss';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import Skils from './pages/Skils';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const routes = [
  { path: "/", name: "Home", component: Home},
  { path: "/projects", name: "Projects", component: Projects},
  { path: "/skils", name: "Skils", component: Skils},
  { path: "/contact", name: "Contact", component: Contact},
  { path: "/about", name: "About", component: About}
];

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        {routes.map(({path, component}, index) => (
          <Route key={index} path={path} exact component={component}></Route>
        ))}
      </Switch>
      <Nav />
    </div>
    </Router>
  );
}

export default App;
