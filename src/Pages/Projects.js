import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from '../css/Main.module.css';

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
        projects
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
});

export default connect(mapStateToProps)(Projects);
