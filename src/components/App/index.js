import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import dashboardData from '../../data/data.json';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.getRandomArray = this.getRandomArray.bind(this);
  }

  getRandomArray(numItems) {
    let data = [];
    for (var i = 0; i < numItems; i++) {
      data.push(Math.round(20 + 80 * Math.random()));
    }
    return data;
  }

  render() {
    return (
      <div className="app__container">
        <Header
          title={dashboardData.titles.header}
        />
        <Main
          title={dashboardData.titles.main}
          text={dashboardData.text.description}
          graph={dashboardData.graph}
          getRandomArray={this.getRandomArray}
        />
      </div>
    );
  }
}

export default App;
