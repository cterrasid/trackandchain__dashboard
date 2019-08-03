import React, { Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './styles.scss';

const DoughnutGraph = props => {
  const { title, transport, getRandomArray } = props;

  return (
    <Fragment>
      <svg
        id="curveUpColor"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 100 C 20 0 50 0 100 100 Z" />
      </svg>
      <article className="transport__container">
        <h3 className="transport__title">{title}</h3>
        <Doughnut
          data={{
            labels: transport,
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
        id="curveDownColor"
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

export default DoughnutGraph;
