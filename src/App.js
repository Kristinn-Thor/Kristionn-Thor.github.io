//-----React Import-----//
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//-----Style Import-----//
import './App.scss';
//-----Component Import-----//
import Nav from './components/Nav';
//-----Page/Component Import-----//
import Skils from './pages/Skils';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
