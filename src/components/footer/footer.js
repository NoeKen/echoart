// src/components/Footer.js
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-container">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Adresse: 123 Rue Imaginaire, Ville, Pays</p>
          <p>Téléphone: +123 456 7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h4>Liens Utiles</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <p>&copy; 2024 EchoArt. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
