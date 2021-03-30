import React, { useState } from "react";
import Board from "../Components/TicTacToe/Board";
import { TICTACTOE_RULE, TICTACTOE_TITLE } from "../Constants";
import Helper from "../Utilities/helper";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [draw, setDraw] = useState('');
    const winner = Helper.calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return (setDraw("draw"));
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    };

    return (
        <div className="gray-wrap small-margin">
            <h1 className="title">{TICTACTOE_TITLE}</h1>
            <p className="text-blue small-margin">{TICTACTOE_RULE} </p>
            <Board squares={board} onClick={handleClick} />
            <div style={style}>
                <p className="brown-text">
                    {winner ? <h1 className="title">Winner:  {winner} </h1> : draw ? "draw" : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
            </div>
        </div>
    )
}