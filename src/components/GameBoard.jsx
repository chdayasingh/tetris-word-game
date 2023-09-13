import { useState } from "react";

const GameBoard = ({ fallingWords, gameOver, handleWordLanded }) => {
  const buildGrid = () => {
    const grid = [];
    const ROWS = 15;
    const COLS = 35;

    for (let i = 0; i < ROWS; i++) {
      const row = [];
      for (let j = 0; j < COLS; j++) {
        row.push("");
      }
      grid.push(row);
    }

    return grid;
  };

  const [grid, setGrid] = useState(buildGrid);

  const handleClick = (row, col) => {
    console.log("div clicked");
    const newGrid = [...grid];
    newGrid[row][col] = newGrid[row][col] === "" ? "O" : "";
    setGrid(newGrid);
  };

  return (
    <div className="tetris-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="tetris-row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              onClick={() => handleClick(rowIndex, cellIndex)}
              className={cell ? "tetris-cell filled" : "tetris-cell"}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      {/* Render falling words */}
      {fallingWords.map((word, index) => (
        <div key={index} className="tetris-row">
          {word.split("").map((letter, letterIndex) => (
            <div
              key={letterIndex}
              className={`tetris-cell ${gameOver ? "filled" : ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
