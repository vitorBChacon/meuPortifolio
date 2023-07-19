import React, { Component } from 'react';
import { connect } from 'react-redux';
import Top from '../Components/Top';
import About from '../Components/About';
import styles from '../css/Main.module.css';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const { isDarkThemeOn } = this.props;

    return (
      <main
      data-testid='main'
      className={isDarkThemeOn ? styles.dark : styles.light}
      >
        <Top />
        <About />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
});

export default connect(mapStateToProps)(Main);
