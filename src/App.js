import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={<Main />}
          data-testid="main-route"
        />
      </Routes>
    );
  }
}
