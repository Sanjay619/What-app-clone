import React from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router , Switch, } from "react-router-dom";

function App() {
  return (
    <div className="app">
    
   <div className = "app__body">

     <Router>
     <Sidebar />
       <Switch>

        <Router path="/rooms/:rooId">
          <Chat />
       </Router>

        <Router path="/">
          <Chat />
        </Router>
       </Switch>
      
        </Router>
      </div>
    </div>
  );
}

export default App;
