import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './component/Homepage'
import Portfolio from './component/Portfolio'
import Skills from './component/Skills'
import Contact from './component/Contact'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/skill' component={Skills} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
