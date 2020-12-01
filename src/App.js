//-----React Import-----//
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/skils", name: "Skils", component: Skils },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about", name: "About", component: About }
];

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
}

  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(({ path, component: C }, index) => (
            <Route
              key={index}
              path={path}
              exact
              render={(props) => <C {...props} lightOn={lightMode} onToggleLightMode={toggleLightMode} />}>
            </Route>
          ))}
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
