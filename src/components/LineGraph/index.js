import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles.scss';

const LineGraph = props => {
  const { title, places, getRandomArray } = props;

  return (
    <article className="quick-stats__places">
      <h3 className="places__title">{title}</h3>
      <Line
        data={{
          labels: places,
          datasets: [
            {
              label: 'Afluencia',
              borderColor: 'rgb(255, 99, 132)',
              data: getRandomArray(100),
            },
          ],
        }}
      />
    </article>
  );
};

export default LineGraph;
