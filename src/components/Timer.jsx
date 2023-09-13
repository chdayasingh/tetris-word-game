import React, { useState, useEffect } from "react";

const Timer = ({ onTimeout }) => {
  const initialTime = 5 * 60; // 5 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer;

    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
      onTimeout(); // Execute a callback when the timer reaches zero
    }

    return () => clearInterval(timer);
  }, [time, onTimeout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <div className="timer">Time: {formatTime(time)}</div>;
};

export default Timer;
