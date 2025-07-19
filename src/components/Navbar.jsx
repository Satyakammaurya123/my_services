import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/profile_pic_icon.png';

// useRef and useEffect to detect clicks outside of .profile-container and close the dropdown accordingly.

export default function Navbar({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>
      <h1>My Services E-Commerce</h1>

      <div
        className={`profile-container ${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
        ref={profileRef}
      >
        <div className="profile-icon">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="dropdown-menu">
          <div className="dropdown-header">
            <img src={profileImg} alt="Profile" />
            <div className="info">
              <div className="name">John Doe</div>
              <div className="desc">Web Developer</div>
            </div>
          </div>
          <div className="dropdown-item">Option 1</div>
          <div className="dropdown-item">Option 2</div>
          <div className="dropdown-item">Option 3</div>
          <div className="dropdown-item">Option 4</div>
          <div className="dropdown-item">Option 5</div>
          <div className="dropdown-item">Option 6</div>
        </div>
      </div>
    </nav>
  );
}
