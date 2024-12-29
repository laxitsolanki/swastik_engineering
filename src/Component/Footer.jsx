import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer
    className="footer"
    role="contentinfo"
    itemScope=""
    itemType="http://schema.org/WPFooter"
  >
    <div
      className="footer-left"
      itemScope=""
      itemType="http://schema.org/Organization"
    >
      <img
        src={logo}
        alt="Logo"
        itemProp="logo"
        className="u-logo logo"
      />
      <h3 itemProp="name" className="p-name">
      Swastik Engineering<span> Solution</span>
      </h3>
      <nav aria-label="Footer Navigation">
        <p className="footer-links">
          <a href="#" className="link-1" itemProp="url">
            Home
          </a>
          <a href="#" itemProp="url">
            Blog
          </a>
          <a href="#" itemProp="url">
            Comics
          </a>
          <a href="#" itemProp="url">
            Poems
          </a>
          <a href="#" itemProp="url">
            Gallery
          </a>
          <a href="#" itemProp="url">
            Contact
          </a>
        </p>
      </nav>
      <p className="footer-name">S David Prince Name © 2024</p>
    </div>
    <div className="footer-center">
      <div
        itemScope=""
        itemType="http://schema.org/PostalAddress"
        className="p-address"
      >
        <i className="fa fa-map-marker" aria-hidden="true" />
        <p>
          <span itemProp="streetAddress" className="p-street-address">
            123 This is a Street
          </span>
          ,
          <span itemProp="addressLocality" className="p-locality">
            A Locality
          </span>
          ,
          <span itemProp="addressRegion" className="p-region">
            Region state
          </span>
          ,
          <span itemProp="postalCode" className="p-postal-code">
            12345
          </span>
        </p>
      </div>
      <div>
        <i className="fa fa-phone" aria-hidden="true" />
        <p itemProp="telephone" className="p-tel">
          +91 8469244499
        </p>
      </div>
      <div>
        <i className="fa fa-envelope" aria-hidden="true" />
        <p>
          <a
            href="mailto:support@company.com"
            itemProp="email"
            className="u-email"
          >
            info@swastikengineeringsolution.com
          </a>
        </p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-about">
        <span>About this site</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
        convallis velit, eu auctor lacus vehicula sit amet.
      </p>
      <div className="footer-socials">
        <a
          href="#"
          rel="me"
          aria-label="Facebook"
          itemProp="sameAs"
          className="u-url"
        >
          <i className="fa-brands fa-facebook" />
        </a>
        <a
          href="#"
          rel="me"
          aria-label="Twitter"
          itemProp="sameAs"
          className="u-url"
        >
          <i className="fa-brands fa-x-twitter" />
        </a>
        <a
          href="#"
          rel="me"
          aria-label="LinkedIn"
          itemProp="sameAs"
          className="u-url"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="#"
          rel="me"
          aria-label="GitHub"
          itemProp="sameAs"
          className="u-url"
        >
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
