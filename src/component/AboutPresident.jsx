import React from "react";
import "./accueil.css";

export const AboutPresident = () => {
  return (
    <section id="about-president" className="about-president" data-aos="zoom-out">
      <div className="about-container">
        <div className="president-image">
          <img src="/images/pdg.jpg" alt="Présidente de l'association" />
          <p className="president-role">Présidente — Fitiavana Association</p>
        </div>
        <div className="president-text">
          <h2>À propos</h2>
          <p>
            À cause de mon amour pour mon village natal, et vivant aujourd'hui en France 🇫🇷, 
            j'aimerais aider ses habitants à améliorer leur quotidien, à trouver des moyens 
            de subsistance dignes. Je pense qu'ils méritent d'être soutenus pour qu'ils puissent 
            s'en sortir dans la vie. En tant qu'être humain, voir des gens qui n'ont rien, 
            vraiment pauvres matériellement, m'a profondément touché. Cela m'a donné l'envie 
            de leur offrir une vie meilleure, une vraie richesse.
          </p>
          <p className="signature">— Viviane Bacque</p>
        </div>
      </div>
    </section>
  );
};
export default AboutPresident;