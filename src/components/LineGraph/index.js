import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles.scss';

const LineGraph = props => {
  const { title, places, getRandomArray } = props;

  return (
    <article className="places__container">
      <h3 className="places__title">{title}</h3>
      <Line
        id="line"
        data={{
          labels: places,
          datasets: [
            {
              label: 'Afluencia',
              borderColor: '#059e88',
              hoverBorderColor: '#02938c',
              data: getRandomArray(100),
              responsive: true,
              maintainAspectRatio: false,
            },
          ],
        }}
      />
    </article>
  );
};

export default LineGraph;
