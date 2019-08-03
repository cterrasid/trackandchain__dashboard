import React from 'react';
import LineGraph from '../LineGraph';
import BarGraph from '../BarGraph';
import PieGraph from '../PieGraph';
import DoughnutGraph from '../DoughnutGraph';
import Location from '../Location';
import './styles.scss';

const Main = props => {
  const { title, text, graph, getRandomArray } = props;

  return (
    <main className="main__container">
      <section className="description__container">
        <h2 className="description__title">{title.description}</h2>
        <p className="description__text">{text}</p>
      </section>
      <svg
        id="curveDownWhite"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C 50 100 80 100 100 0 Z" />
      </svg>
      <section className="quick-stats__container">
        <LineGraph
          title={title.places}
          places={graph.places}
          getRandomArray={getRandomArray}
        />
        <DoughnutGraph
          title={title.transport}
          transport={graph.transport}
          getRandomArray={getRandomArray}
        />
        <BarGraph
          title={title.visitors}
          days={graph.days}
          getRandomArray={getRandomArray}
        />
        <PieGraph
          title={title.satisfaction}
          satisfaction={graph.satisfaction}
          getRandomArray={getRandomArray}
        />
        <Location title={title.location} />
      </section>
    </main>
  );
};

export default Main;
