import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Timer from "./Timer";
import Controller from "./Controller";
import GameBoard from "./GameBoard";

import { useState } from "react";
import phrases from "../assets/phrases.js";

const Game = () => {
  let phraseIndex = 0;
  let wordIndex = 0;
  let word = phrases[phraseIndex].split(" ")[wordIndex];
  let nextWord = phrases[phraseIndex].split(" ")[wordIndex + 1];

  for (let i = 0; i < phrases.length; i++) {
    console.log(phrases[i]);
  }

  const builGrid = () => {
    const grid = [];

    for (let i = 0; i < 15; i++) {
      const row = [];
      for (let j = 0; j < 20; j++) {
        row.push("");
      }
      grid.push(row);
    }

    return grid;
  };

  let [gameStarted, setGameStarted] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  let [score, setScore] = useState(0);
  //   let [grid, setGrid] = useState(builGrid());

  const handleMoveLeft = () => {
    console.log("Left");
  };
  const handleMoveDown = () => {
    console.log("Down");
  };
  const handleMoveRight = () => {
    console.log("Right");
  };

  return (
    <div className="game-container">
      <div className="Header">
        <div className="d-flex justify-content-between">
          <div className="logo">Game Logo</div>
          {gameStarted && (
            <div className="nextWord">
              Current word: {word}, Next Upcoming Word:{" "}
              <span id="nextWordValue">{nextWord}</span>
            </div>
          )}
          <div className="score">
            Score: <span id="scoreValue">0</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <GameBoard array2d={builGrid()} />
        <GameBoard />
      </div>
      <div className="Footer">
        <div className="d-flex justify-content-between">
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setGameStarted(true);
              }}
            >
              {!gameStarted ? "Start Game" : "Resart"}
            </Button>
            <span>Current sentence: {phrases[0]}</span>
          </div>

          <Controller
            onMoveLeft={handleMoveLeft}
            onMoveDown={handleMoveDown}
            onMoveRight={handleMoveRight}
          ></Controller>
          {gameStarted && (
            <Timer
              onTimeout={() => {
                console.log("Game End");
                setGameStarted(false);
              }}
            ></Timer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
