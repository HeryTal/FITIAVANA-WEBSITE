import React, { useEffect, useState } from "react";
import "./accueil.css";
import logo from "../assets/FITIAVANA.png";
import BlurText from "./BlurText"; // 👈 Assure-toi que le chemin est bon

const heroImages = [
  "/images/img4.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img1.jpg",
];

export default function Accueil() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="ivandrika-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-placeholder">
              <img src={logo} alt="Ivandrika Logo" className="logo-image" />
            </div>
            <h1 className="header-title">Ivandrika Farafangana</h1>
          </div>
          <div className="header-right">
            <a href="#" className="nav-link">à propos</a>
            <a href="#" className="nav-link">Bénévolat</a>
            <a href="#" className="nav-link">Contact</a>
            <button className="btn-donation">Donation</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
          {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={heroImages[currentImage]}
            alt="Ivandrika Hero"
            className="hero-image"
          />
          
        </div>
        <BlurText
          text="Fitiavana 
: 
solidarité, 
espoir, 
éducation, 
amour."
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="hero-title"
        />
        
      </section>


      {/* Content Section */}
      <main className="main-content">
        <div className="content-grid">
          <div className="card card-blue">
            <h3 className="card-title">Ongoing Projects</h3>
            <p className="card-text">
              Omeo anadalana mazava tsara ireo asa lehibe ataonay eto amin'ny
              fiarahamonina, hanatsarana ny fiainana eto an-toerana sy any ambanivohitra.
            </p>
            <button className="btn-yellow">Donate Now</button>
          </div>

          <div className="image-placeholder">
            <img src="/images/img2.jpg" alt="Ivandrika Hero" className="hero-image" />
          </div>

          <div className="image-placeholder">
            <img src="/images/img3.jpg" alt="Ivandrika Hero" className="hero-image" />
          </div>

          <div className="card card-blue">
            <h3 className="card-title">Success Stories</h3>
            <p className="card-text">
              Omeko anao ireo tantaran'ny olona niova fiainana taorian'ny
              fanohanana sy fanentanana nataonay.
            </p>
            <button className="btn-orange">Get Involved</button>
          </div>
        </div>
      </main>
      <section className="about-president">
  <div className="about-container">
    <div className="president-image">
      <img src="/images/pdg.jpg" alt="Présidente de l'association" />
      <p className="president-role">Présidente — Fitiavana Association</p>
    </div>
    <div className="president-text">
      <h2>À propos</h2>
      <p>
       À cause de mon amour pour mon village natal, et vivant aujourd’hui en France 🇫🇷, j’aimerais aider ses habitants à améliorer leur quotidien, à trouver des moyens de subsistance dignes.
Je pense qu’ils méritent d’être soutenus pour qu’ils puissent s’en sortir dans la vie.
En tant qu’être humain, voir des gens qui n’ont rien, vraiment pauvres matériellement, m’a profondément touché. Cela m’a donné l’envie de leur offrir une vie meilleure, une vraie richesse.
Et en tant qu’enfant de Dieu, je crois qu’il est de notre devoir d’aider ceux qui sont dans le besoin. Dieu aime tout le monde, même ceux qui sont égarés, et Il souhaite qu’ils soient sauvés.
Je souhaite aussi lutter contre la famine et la pauvreté, par exemple en mettant en place une cantine.
Comme j’ai moi-même beaucoup reçu dans ma vie, j’aimerais aujourd’hui partager le chemin qui m’a permis d’arriver jusqu’ici, et guider d’autres vers un avenir meilleur. </p>
      <p className="signature">— Viviane Bacque</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">IVANDRIKA | IVOGDRI.COM</div>
          <div className="footer-map">📍 Voir map</div>
          <div className="footer-contact">✉️ info@etrangersolid.com</div>
        </div>
      </footer>
    </div>
  );
}
