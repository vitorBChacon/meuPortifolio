import React, { Component } from 'react';
import Top from '../Components/Top'
import About from '../Components/About';
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className='dark'>
        <Top />
        <About />
      </main>
    )
  }

}

export default Main;
