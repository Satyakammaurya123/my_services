import './Navbar.css';

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>
      <h1>My Services E-Commerce</h1>
    </nav>
  );
}
