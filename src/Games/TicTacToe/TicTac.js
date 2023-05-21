import React, { useState } from "react";
import Square from "./Square";
import './tictac.css'
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="tictac-board-container">
      {isWinner ? (
        <>

       <span className="tictacresult">   {isWinner} won the game{" "} </span>
          <div onClick={handleReset} className="again" id="again">Play Again</div>
        </>
      ) : (
        <div className="tictac-board">
          <h4>Player {isXTurn ? "X" : "O"} please move</h4>
          <div className="board-row">
            <Square id="1" onClick={() => handleClick(0)} value={state[0]} />
            <Square id="2" onClick={() => handleClick(1)} value={state[1]} />
            <Square id="3" onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square id="4" onClick={() => handleClick(3)} value={state[3]} />
            <Square id="5" onClick={() => handleClick(4)} value={state[4]} />
            <Square id="6" onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square id="7" onClick={() => handleClick(6)} value={state[6]} />
            <Square id="8" onClick={() => handleClick(7)} value={state[7]} />
            <Square id="9" onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
