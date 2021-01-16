import React from 'react';
import SnapSearch from '../pages/SnapSearch';
import TicTacToe from '../pages/TicTacToe';
import { Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Todo from '../pages/Todo';
import Navbar from '../Components/Navbar/Navbar';
import FaceRecognition from '../pages/FaceRecognition';

function Wrapper() {
  return (
    <>
      <Navbar />
      <div className="Wrapper">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/todo" component={Todo} />
          <Route path="/snap-search" component={SnapSearch} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/face-recognition" component={FaceRecognition} />
        </Switch>
      </div>
    </>
  );
}

export default Wrapper;
