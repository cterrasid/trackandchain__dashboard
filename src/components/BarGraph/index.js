import React from 'react';
import { Bar } from 'react-chartjs-2';
import './styles.scss';

const BarGraph = props => {
  const { title, days, getRandomArray } = props;

  return (
    <article className="visitors__container">
      <h3 className="visitors__title">{title}</h3>
      <Bar
        data={{
          labels: days,
          datasets: [
            {
              label: 'Visitas',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(209, 12, 94,0.2)',
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: getRandomArray(10),
            },
          ],
        }}
      />
    </article>
  );
};

export default BarGraph;
