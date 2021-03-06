import React, { Component } from 'react';
import logo from '../../assets/images/ballers-pin.svg';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

import styles from './Home.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className={styles.app}>
          <div className={styles.header}>
            <img src={logo} className={ styles.logo } alt="logo" />
            <h2>Welcome to Ballers!</h2>
          </div>
          <p className={styles.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/courts">Courts</Link>
        </section>
      </div>
    );
  }
}

export default App;
