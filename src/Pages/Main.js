import React, { Component } from 'react';
import Top from '../Components/Top'
import About from '../Components/About';
import styles from '../css/Main.module.css';
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const { isDarkThemeOn } = this.props;
    return (
      <main data-testid='main' className={ isDarkThemeOn ? styles.dark : styles.light }>
        <Top />
        <About />
      </main>
    )
  }

}

export default Main;
