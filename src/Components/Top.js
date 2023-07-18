import React, { Component } from "react";
import { connect } from 'react-redux';
import { toggleTheme } from '../redux/slices/theme';

class Top extends Component {
  render() {
    return (
      <header>
        <h1> Vitor Breno Chacon e Silva</h1>
        <button
        data-testid="dark-mode"
        onClick={toggleTheme}
        >darkModeButton</button>
        <nav>
          <a>Página Principal</a>
          <br/>
          <a>Projetos</a>
          <br/>
          <a>Contatos</a>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

const mapDispatchToProps = { toggleTheme };

export default connect(mapStateToProps, mapDispatchToProps)(Top);