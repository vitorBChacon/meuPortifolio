import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/slices/theme';
import { HiSun, HiMoon } from 'react-icons/hi';
import styles from '../css/Top.module.css';

class Top extends Component {
  render() {
    const { isDarkThemeOn, toggleTheme } = this.props;
    return (
      <header>
        <h1> Vitor Breno Chacon e Silva</h1>
        <nav className={styles.navContainer}>
          { isDarkThemeOn ? <HiSun onClick={toggleTheme}/> : <HiMoon onClick={toggleTheme}/> }
          <Link to="/">Página Principal</Link>
          <Link to="/projects">Projetos</Link>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkThemeOn: state.theme.isDarkThemeOn,
});

const mapDispatchToProps = { toggleTheme };

export default connect(mapStateToProps, mapDispatchToProps)(Top);

