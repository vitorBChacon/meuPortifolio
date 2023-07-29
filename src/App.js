import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import './css/app.css';
import Projects from './Pages/Projects';

export default class App extends Component {
  render() {
    return (
      <Routes>
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
