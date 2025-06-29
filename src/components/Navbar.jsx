import './Navbar.css';

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      My Services E-Commerce
    </nav>
  );
}
