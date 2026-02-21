import './My_Games.css';
import { useNavigate } from 'react-router-dom';

export default function My_Games() {

  const navigate = useNavigate();

  return (
    <div className="games">
      <h2>PlayStation Gaming World</h2>
      <p>Select your gaming category below.</p>

      <div className="games-boxes">

        <div className="games-box">
          <h3>PS5 Games</h3>
          <p>Explore the latest next-gen PlayStation 5 titles.</p>
        </div>

        <div className="games-box">
          <h3>PS4 Classics</h3>
          <p>Relive iconic PlayStation 4 masterpieces.</p>
        </div>

        <div className="games-box">
          <h3>Multiplayer</h3>
          <p>Compete and connect with players worldwide.</p>
        </div>

        <div className="games-box">
          <h3>Action</h3>
          <p>High-speed, adrenaline-pumping adventures.</p>
        </div>

        <div className="games-box">
          <h3>RPG</h3>
          <p>Immersive role-playing experiences.</p>
        </div>

        <div 
          className="games-box back-box"
          onClick={() => navigate('/')}
        >
          <h3>Back to Home</h3>
          <p>Return to the main page.</p>
        </div>

      </div>
    </div>
  );
}
