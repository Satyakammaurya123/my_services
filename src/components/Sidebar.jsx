import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/option1">Option 1</Link></li>
        <li><Link to="/option2">Option 2</Link></li>
        <li><Link to="/option3">Option 3</Link></li>
        <li><Link to="/option4">Option 4</Link></li>
        <li><Link to="/option5">Option 5</Link></li>
      </ul>
    </div>
  );
}
