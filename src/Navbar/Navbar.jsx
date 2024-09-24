import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import dowpaw from '../assets/dowpaw.png';
import menuIcon from '../assets/menu-icon.png'; // Hamburger icon for both open and close

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`navbar ${sticky ? 'scroll-nav' : ''}`}>
      <div className="title">
        <h2>Woofit</h2>
        <img src={dowpaw} className="dogpaw" alt="dog paw" />
      </div>

      {/* Mobile menu toggle button */}
      <img
        src={menuIcon}
        onClick={toggleMenu}
        className={`menu-icon ${mobileMenu ? 'open' : ''}`} // Dynamic class for rotation effect
        alt="menu icon"
        aria-label="Toggle navigation"
      />

      {/* Navigation links */}
      <nav className={`nav-links ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
        <ul>
          <li><Link to="hero" smooth={true} offset={-180} duration={1000} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-110} duration={1000} onClick={toggleMenu}>About</Link></li>
          <li><Link to="services" smooth={true} offset={-145} duration={1000} onClick={toggleMenu}>Services</Link></li>
          <li><Link to="contact" smooth={true} offset={-145} duration={1000} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
