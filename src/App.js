import React from 'react';
import { Component } from 'react';
import { MonsterHome } from './components/monster-home/monster-home.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import MonsterDetail from './components/monster-detail/monster-detail.component';

class App extends Component {
  
  render() {
    
     return (
       <Switch>
        <Route exact path="/" component={MonsterHome} />
        <Route path="/detail" component={MonsterDetail} />
      </Switch>
    );
  }
}

export default App;
