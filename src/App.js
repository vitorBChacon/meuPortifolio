import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import './css/app.css';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          exact path="/"
          element={<Main />}
        />
      </Routes>
    );
  }
}
