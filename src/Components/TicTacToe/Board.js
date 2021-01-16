import React from 'react';
import _ from "lodash";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {_.map(squares, (square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;