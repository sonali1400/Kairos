import React from 'react';
import { Button } from '@material-ui/core';
import {
  DASHBOARD_TITLE, TODO_DESCRIPTION, CHECK_TEXT, TODO_TITLE, SNAPSEARCH_TITLE, SNAPSEARCH_DESCRIPTION,
  TICTACTOE_TITLE, TICTACTOE_DESCRIPTION,
  // FACIAL_RECOGNITION_DESCRIPTION, FACIAL_RECOGNITION
} from "../Constants";

const Dashboard = () => {
  return (
    <div className="page-wrap">
      <p className="brown-text">
        {DASHBOARD_TITLE}
      </p>
      <div className="task-wrap border">
        <p className="text-blue">{TODO_DESCRIPTION}</p>
        <Button href="todo" variant="contained" color="primary"> {CHECK_TEXT}{TODO_TITLE}</Button>
      </div>
      <div className="task-wrap border">
        <p className="text-blue">{SNAPSEARCH_DESCRIPTION}</p>
        <Button href="snap-search" variant="contained" color="primary">{CHECK_TEXT}{SNAPSEARCH_TITLE}</Button>
      </div>
      <div className="task-wrap border">
        <p className="text-blue">{TICTACTOE_DESCRIPTION}</p>
        <Button href="tic-tac-toe" variant="contained" color="primary">{CHECK_TEXT}{TICTACTOE_TITLE}</Button>
      </div>
      <div className="task-wrap border">
        <p className="text-blue">QuizBee</p>
        <Button href="quiz-bee" variant="contained" color="primary">{CHECK_TEXT}Quiz</Button>
      </div>
      {/* <div className="task-wrap border">
        <p className="text-blue">{FACIAL_RECOGNITION_DESCRIPTION}</p>
        <Button href="snap-search" variant="contained" color="primary">{CHECK_TEXT}{FACIAL_RECOGNITION}</Button>
      </div> */}
    </div>
  );
};

export default Dashboard;