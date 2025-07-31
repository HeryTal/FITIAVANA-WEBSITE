import React, { useState } from "react";
import logo from "../assets/FITIAVANA.png";
import ContactModal from "./ContactModal";
import "./accueil.css";

export const Header = () => {
  const [showContact, setShowContact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-placeholder">
              <img src={logo} alt="Ivandrika Logo" className="logo-image" />
            </div>
            <h1 className="header-title">Ivandrika Farafangana</h1>
          </div>

          <div className={`header-right ${isMenuOpen ? "open" : ""}`}>
            <a href="#about-president" className="nav-link">à propos</a>
            <a href="#" className="nav-link">Bénévolat</a>
            <a onClick={() => setShowContact(true)} className="nav-link" style={{ cursor: 'pointer' }}>Contact</a>
            <button className="btn-donation">Donation</button>
          </div>

          <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </header>

      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Header;
