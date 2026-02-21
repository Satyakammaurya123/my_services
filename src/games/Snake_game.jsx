import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Snake_game.css';

const gridSize = 20;
const tileCount = 20;

export default function Snake_game() {

  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const [highScoreData, setHighScoreData] = useState(
    JSON.parse(localStorage.getItem("snakeHighScoreData")) || {
      name: "",
      score: 0
    }
  );

  const snake = useRef([{ x: 10, y: 10 }]);
  const velocity = useRef({ x: 1, y: 0 });
  const food = useRef({ x: 5, y: 5 });

  const resetGame = () => {
    snake.current = [{ x: 10, y: 10 }];
    velocity.current = { x: 1, y: 0 };
    setScore(0);
    generateFood();
    setGameOver(false);
  };

  const generateFood = () => {
    food.current = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    };
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const head = {
      x: snake.current[0].x + velocity.current.x,
      y: snake.current[0].y + velocity.current.y
    };

    if (
      head.x < 0 || head.x >= tileCount ||
      head.y < 0 || head.y >= tileCount ||
      snake.current.some(seg => seg.x === head.x && seg.y === head.y)
    ) {
      endGame();
      return;
    }

    snake.current.unshift(head);

    if (head.x === food.current.x && head.y === food.current.y) {
      setScore(prev => prev + 1);
      generateFood();
    } else {
      snake.current.pop();
    }

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    snake.current.forEach(seg =>
      ctx.fillRect(seg.x * gridSize, seg.y * gridSize, gridSize - 2, gridSize - 2)
    );

    ctx.fillStyle = "red";
    ctx.fillRect(food.current.x * gridSize, food.current.y * gridSize, gridSize - 2, gridSize - 2);
  };

  const endGame = () => {
    if (score > highScoreData.score) {
      const newHigh = { name, score };
      localStorage.setItem("snakeHighScoreData", JSON.stringify(newHigh));
      setHighScoreData(newHigh);
    }
    setGameOver(true);
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const interval = setInterval(gameLoop, 120);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp" && velocity.current.y !== 1)
        velocity.current = { x: 0, y: -1 };
      if (e.key === "ArrowDown" && velocity.current.y !== -1)
        velocity.current = { x: 0, y: 1 };
      if (e.key === "ArrowLeft" && velocity.current.x !== 1)
        velocity.current = { x: -1, y: 0 };
      if (e.key === "ArrowRight" && velocity.current.x !== -1)
        velocity.current = { x: 1, y: 0 };
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleStart = () => {
    if (!name || !age) {
      alert("Please enter name and age");
      return;
    }
    setGameStarted(true);
    resetGame();
  };

  return (
    <div className="snake-page">
      {!gameStarted ? (
        <div className="snake-container">
          <div className="snake-card">
            <h3>Enter Details to Play</h3>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            <button onClick={handleStart}>Play</button>
          </div>
        </div>
      ) : (
        <div className="snake-container">
          <div className="snake-card snake-game-wrapper">
            <h3>Score: {score}</h3>
            <h4>
              Highest Score: {highScoreData.score}
              {highScoreData.name && ` (by ${highScoreData.name})`}
            </h4>

            <canvas
              ref={canvasRef}
              width={gridSize * tileCount}
              height={gridSize * tileCount}
              className="snake-canvas"
            />

            {!gameOver && (
              <div className="controls">
                <button className="up" onClick={() => velocity.current = { x: 0, y: -1 }}>⬆</button>
                <button className="left" onClick={() => velocity.current = { x: -1, y: 0 }}>⬅</button>
                <button className="right" onClick={() => velocity.current = { x: 1, y: 0 }}>➡</button>
                <button className="down" onClick={() => velocity.current = { x: 0, y: 1 }}>⬇</button>
              </div>
            )}

            {gameOver && (
              <div className="game-over-overlay">
                <div className="game-over-box">
                  <h3>Game Over</h3>
                  <p>Your Score: {score}</p>

                  <button onClick={resetGame}>
                    Play Again
                  </button>

                  <button onClick={() => navigate('/game')}>
                    Back to Games
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
