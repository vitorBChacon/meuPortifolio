import React, { Component } from "react";
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/slices/theme';
import { HiSun, HiMoon } from 'react-icons/hi'

class Top extends Component {
  render() {
    const { isDarkThemeOn, toggleTheme } = this.props;
    return (
      <header>
        <h1> Vitor Breno Chacon e Silva</h1>
        { isDarkThemeOn ? <HiSun onClick={toggleTheme}/> : <HiMoon onClick={toggleTheme}/> }
        <nav>
          <a>Página Principal</a>
          <br />
          <a>Projetos</a>
          <br />
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

