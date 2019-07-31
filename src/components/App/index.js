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
    return (
      <div className="app__container">
        <header className="header__container">Header</header>
        <main className="main__container">
          <section className="quick-stats__container">Stats</section>
          <section className="location__container">Location</section>
          <section className="tweets__container">Tweets</section>
        </main>
        <footer className="footer__container">Footer</footer>
      </div>
    );
  }
}

export default App;
