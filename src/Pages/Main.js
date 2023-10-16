import React, { Component } from 'react';
import { connect } from 'react-redux';
import Top from '../Components/Top';
import About from '../Components/About';
import Bottom from '../Components/Bottom';
import styles from '../css/Main.module.css';
import { setPage } from '../redux/slices/pageTracker';

class Main extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { setPage } = this.props;
    setPage('root')
  };

  render() {
    const { isDarkThemeOn } = this.props;

    return (
      <main
      data-testid='main'
      className={isDarkThemeOn ? styles.dark : styles.light}
      >
        <Top />
        <About />
        <Bottom />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
  currentPage: state.pageTracker.currentPage,
});

const mapDispatchToProps = { setPage };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
