import React from "react";
import "./component/accueil.css";
import  Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import MainContent  from "./component/MainContent";
import AboutPresident  from "./component/AboutPresident";
import Footer  from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // durée des animations (en ms)
      once: true,     // n'anime qu'une seule fois
    });
  }, []);
  return (
    <div className="ivandrika-container">
      <Header />
      <HeroSection />
      <MainContent />
      <AboutPresident />
      <Footer />
    </div>
  );
}