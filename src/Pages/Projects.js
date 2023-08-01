import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from '../css/Main.module.css';
import Top from '../Components/Top';
import ProjectList from '../Components/projectList';

class Projects extends Component {
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
        <ProjectList />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
});

export default connect(mapStateToProps)(Projects);
