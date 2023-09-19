import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Projects from './Pages/Projects';
import styles from './css/App.module.css'

export default class App extends Component {
  render() {
    return (
      <Routes className={styles.App}>
        <Route
          exact path="/"
          element={<Main />}
        />
        <Route
          exact path="/projects"
          element={<Projects />}
        />
      </Routes>
    );
  }
}
