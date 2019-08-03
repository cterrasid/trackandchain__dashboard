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
              backgroundColor: '#059e87df',
              borderColor: '#147f74',
              hoverBackgroundColor: '#02938cc4',
              hoverBorderColor: '#215e54',
              data: getRandomArray(10),
            },
          ],
        }}
      />
    </article>
  );
};

export default BarGraph;
