import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Bölümü - Boyutu CSS'den yöneteceğiz */}
        <a href="#home" className="navbar-logo">
          <img src="/EGE.png" alt="Ege Door Logo" />
        </a>

        {/* Hamburger Menu (Mobil) */}
        <div className="menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
          <div className={mobileMenu ? "line1 active" : "line1"}></div>
          <div className={mobileMenu ? "line2 active" : "line2"}></div>
          <div className={mobileMenu ? "line3 active" : "line3"}></div>
        </div>

        <ul className={`nav-menu ${mobileMenu ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenu(false)}>Ana Sayfa</a></li>
          <li><a href="#about" onClick={() => setMobileMenu(false)}>HAKKIMIZDA</a></li>
          <li><a href="#products" onClick={() => setMobileMenu(false)}>Ürünler</a></li>
          <li><a href="#contact" onClick={() => setMobileMenu(false)}>İLETİŞİM</a></li>
          <li className="nav-cta-mobile">
            <a href="#contact" className="cta-button">TEKLİF Al</a>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="cta-button">Teklİf Al</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;