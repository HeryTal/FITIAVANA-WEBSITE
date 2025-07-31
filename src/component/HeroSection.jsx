import React, { useEffect, useState } from "react";
import BlurText from "./BlurText";
import "./accueil.css";

const heroImages = [
  "/images/img4.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img1.jpg",
];

export const HeroSection = () => {
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
    <section id="hero-section" className="hero-section" data-aos="fade-right">
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
  );
};
export default HeroSection;