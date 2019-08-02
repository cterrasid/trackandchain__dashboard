import React, { Fragment } from 'react';
import logo from '../../images/logo.png';
import './styles.scss';

const Header = props => {
  const { title } = props;

  return (
    <Fragment>
      <header className="header__container">
        <img className="header__logo" src={logo} alt="Track and Chain" />
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
