import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
      
    </div>
  );
}

export default App;
