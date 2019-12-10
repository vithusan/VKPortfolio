import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './component/Homepage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
