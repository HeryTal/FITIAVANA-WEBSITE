import React from "react";
import "./contactModal.css";
import logo from "../assets/FITIAVANA.png";

const ContactModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" data-aos="fade-in">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
       <div className="logo">
  <img src={logo} alt="Ivandrika Logo" className="logo-image" />
</div>
        <h2>Contactez-nous</h2>
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
