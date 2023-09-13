import Button from "@mui/material/Button";
import Timer from "./Timer";
import Controller from "./Controller";
import GameBoard from "./GameBoard";

import InfoIcon from "@mui/icons-material/Info";

import phrases from "../assets/phrases.js";

import { useState, useEffect } from "react";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [fallingWords, setFallingWords] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const getNextWord = () => {
    // Get the next word based on your game logic
    // For simplicity, you can randomly select words from the current phrase
    const wordsInCurrentPhrase = currentPhrase.split(" ");
    const randomIndex = Math.floor(Math.random() * wordsInCurrentPhrase.length);
    return wordsInCurrentPhrase[randomIndex];
  };

  useEffect(() => {
    let timerInterval;

    const startGame = () => {
      // Initialize game variables
      const initialPhraseIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[initialPhraseIndex]);
      setFallingWords([getNextWord()]); // Initialize with the first word

      // Start the timer
      timerInterval = setInterval(() => {
        setFallingWords((prevWords) => {
          // Simulate word falling by removing the first word
          // and adding a new word at the bottom
          const newWords = prevWords.slice(1);
          newWords.push(getNextWord());
          return newWords;
        });
      }, 1000); // Adjust the interval as needed
    };

    const endGame = () => {
      clearInterval(timerInterval);
      setGameOver(true);
      // Handle game over logic here
    };

    if (gameStarted && !gameOver) {
      startGame();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [gameStarted, gameOver]);

  const startGame = () => {
    // Initialize game variables
    // Set a timer for word falling logic
    // Set gameStarted to true
    setGameStarted(true);
  };

  const restartGame = () => {
    // Reset game variables and state
    // Call startGame to begin a new game
    setGameStarted(false);
    setScore(0);
    setCurrentPhrase("");
    setFallingWords([]);
    setGameOver(false);
  };

  const handleWordLanded = () => {
    // Check if the current phrase is complete
    // If yes, increase the score and set a new phrase
  };

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
              Current word: {fallingWords[0]}, Next Upcoming Word:{" "}
              <span id="nextWordValue">{getNextWord()}</span>
            </div>
          )}
          <div className="score">
            Score: <span id="scoreValue">{score}</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <GameBoard fallingWords={fallingWords} />
      </div>
      <div className="Footer">
        <div className="d-flex justify-content-between">
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={gameStarted ? restartGame : startGame}
            >
              {gameStarted ? "Restart" : "Start Game"}
            </Button>

            <span>
              <InfoIcon></InfoIcon> {phrases[0]}
            </span>
          </div>

          {gameStarted && (
            <Timer
              initialTime={5 * 60}
              onTimeout={() => {
                console.log("Game End");
                setGameStarted(false);
                // Handle game over logic here
              }}
            ></Timer>
          )}

          <Controller
            onMoveLeft={handleMoveLeft}
            onMoveDown={handleMoveDown}
            onMoveRight={handleMoveRight}
          ></Controller>
        </div>
      </div>
    </div>
  );
};

export default Game;
