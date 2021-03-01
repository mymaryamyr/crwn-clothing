import React from 'react';
import './App.css';
 import { Switch, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';

const Hats = () => (
  <p>hats</p>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App; 