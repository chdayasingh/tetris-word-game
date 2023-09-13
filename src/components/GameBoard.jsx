import React, { useEffect, useState } from "react";

const GameBoard = ({ array2d }) => {
  array2d = array2d || [];

  let [grid, setGrid] = useState(array2d);

  useEffect(() => {});

  const handleClick = (row, col) => {
    console.log("div clicked");
    const newGrid = [...grid];
    newGrid[row][col] = "O";
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
    </div>
  );
};

export default GameBoard;
