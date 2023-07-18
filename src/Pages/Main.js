import React, { Component } from 'react';
import Top from '../Components/Top'
import About from '../Components/About';
import styles from '../css/Main.module.css';
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main data-testid='main' className={styles.dark}>
        <Top />
        <About />
      </main>
    )
  }

}

export default Main;
