import React, { Component } from 'react';
import Top from '../Components/Top'
import About from '../Components/About';
import Bottom from '../Components/Bottom';
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Top />
        <About />
        <Bottom />
      </div>
    )
  }

}

export default Main;
