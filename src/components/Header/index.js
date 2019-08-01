import React, { Fragment } from 'react';
import './styles.scss';

const Header = props => {
  const { title, logo } = props;

  return (
    <Fragment>
      <header className="header__container">
        <img className="header__logo" src={logo.url} alt={logo.alt} />
        <h1 className="header__title">{title}</h1>
      </header>
      <svg
        id="bigTriangleColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
    </Fragment>
  );
};

export default Header;
