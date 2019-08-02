import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './styles.scss';

const DoughnutGraph = props => {
  const { title, transport, getRandomArray } = props;

  return (
    <article className="quick-stats__transport">
      <h3 className="transport__title">{title}</h3>
      <Doughnut
        data={{
          labels: transport,
          datasets: [
            {
              data: getRandomArray(5),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        }}
      />
    </article>
  );
};

export default DoughnutGraph;
