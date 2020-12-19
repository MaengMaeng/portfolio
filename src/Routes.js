import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import { Home, About, Projects, Contact } from './pages';

const Routes = () => (
  <Router>
    <SideBar></SideBar>

    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Router>
)

export default Routes;