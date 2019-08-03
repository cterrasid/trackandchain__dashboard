import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import './styles.scss';

const LineGraph = props => {
  const { title, places, getRandomArray } = props;

  return (
    <Fragment>
      <svg
        id="curveDownWhite"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
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
    </Fragment>
  );
};

export default LineGraph;
