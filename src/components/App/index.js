import React, { PureComponent } from 'react';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      state: 0,
    };
  }

  render() {
    return <div className="app__container">App</div>;
  }
}

export default App;
