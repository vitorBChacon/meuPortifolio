import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from '../css/Main.module.css';
import Top from '../Components/Top';
import ProjectList from '../Components/projectList';
import Bottom from '../Components/Bottom'
import { setPage } from '../redux/slices/pageTracker';

class Projects extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { setPage } = this.props;
    setPage('projects')
  };

  render() {
    const { isDarkThemeOn } = this.props;
    return (
      <main
      data-testid='main'
      className={isDarkThemeOn ? styles.dark : styles.light}
      >
        <Top />
        <ProjectList />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
  currentPage: state.pageTracker.currentPage,
});

const mapDispatchToProps = { setPage };

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
