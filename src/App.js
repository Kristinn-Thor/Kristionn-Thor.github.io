//-----React Import-----//
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
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
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/projects", exact: false, name: "Projects", component: Projects },
  { path: "/skils", exact: false, name: "Skils", component: Skils },
  { path: "/contact", exact: false, name: "Contact", component: Contact },
  { path: "/about", exact: false, name: "About", component: About }
];

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
}

  return (
    <Router basename="/cv">
      <div className="App">
        <Switch>
          {routes.map(({ path, exact, component: C }, index) => (
            <Route
              key={index}
              path={path}
              exact={exact}
              render={(props) => <C {...props} lightOn={lightMode} onToggleLightMode={toggleLightMode} />} />
          ))}
        </Switch>
        <Nav lightOn={lightMode} />
        <div className={`${lightMode ? "Fade--Light-Mode" : "Fade"}`}></div>
      </div>
    </Router>
  );
}

export default App;
