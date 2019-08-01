import React from 'react';
import './styles.scss';

const Header = props => {
  const { title, logo } = props;

  return (
    <header className="header__container">
      <img className="header__logo" src={logo.url} alt={logo.alt} />
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
