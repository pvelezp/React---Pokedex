import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <Pokedex {...props} />} />

    <Route
    path="/:pokemonId"
    component={(props)=> <Pokemon {...props} />}
    
    />
    </Switch>
  );
}

export default App;
