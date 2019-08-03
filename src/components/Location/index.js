import React from 'react';
import map from '../../images/ani_map.gif';
import './styles.scss';

const Location = props => {
  const { title } = props;

  return (
    <section className="location__container">
      <h3 className="location__title">{title}</h3>
      <img className="location__map" src={map} alt="Followers a nivel mundial" />
    </section>
  );
};

export default Location;
