import React, { Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import './styles.scss';

const PieGraph = props => {
  const { title, satisfaction, getRandomArray } = props;

  return (
    <Fragment>
      <svg
        id="curveUpPie"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      <article className="satisfaction__container">
        <h3 className="satisfaction__title">{title}</h3>
        <Pie
          id="pie"
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
      <svg
        id="curveDownPie"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
    </Fragment>
  );
};

export default PieGraph;
