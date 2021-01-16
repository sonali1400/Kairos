import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Wrapper from './Container/Wrapper';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Wrapper />
        </div>
      </Router>
    </>
  );
}

export default App;
