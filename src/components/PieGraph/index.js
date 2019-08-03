import React from 'react';
import { Pie } from 'react-chartjs-2';
import './styles.scss';

const PieGraph = props => {
  const { title, satisfaction, getRandomArray } = props;

  return (
    <article className="visitors__container">
      <h3 className="visitors__title">{title}</h3>
      <Pie
        data={{
          labels: satisfaction,
          datasets: [
            {
              data: getRandomArray(5),
              backgroundColor: [
                '#199f91',
                '#00825a',
                '#4e5b59',
                '#593a52',
                '#106483',
              ],
              hoverBackgroundColor: [
                '#25c3b4',
                '#00b37d',
                '#80928f',
                '#af74a1',
                '#1e90b9',
              ],
            },
          ],
        }}
      />
    </article>
  );
};

export default PieGraph;
