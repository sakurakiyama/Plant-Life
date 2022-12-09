import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import Home from './Home';
import AddPlantWrapper from './CreatePlant/AddPlantWrapper';
import DeletePlantWrapper from './RemovePlant/DeletePlantWrapper';


function App() {

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/add' component={AddPlantWrapper} />
      <Route exact path='/delete' component={DeletePlantWrapper} />
    </Switch>
  );
}



export default App;
