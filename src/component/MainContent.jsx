import React from "react";
import "./accueil.css";

export const MainContent = () => {
  return (
    <main id="main-content" className="main-content" data-aos="slide-up">
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
          <img src="/images/img2.jpg" alt="Ivandrika Project" className="hero-image" />
        </div>

        <div className="image-placeholder">
          <img src="/images/img3.jpg" alt="Ivandrika Activity" className="hero-image" />
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
  );
};
export default MainContent;