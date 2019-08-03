import React, { Fragment } from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <Fragment>
      <svg
        id="bigTriangleUp"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <footer className="footer__container">
        <p className="footer__author">
          <em>
            <strong>Clarette Terrasi Díaz</strong>
            <small> © 2019</small>
          </em>
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
