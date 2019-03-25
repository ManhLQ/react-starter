import React, { Component } from 'react';
import { Game } from './components';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <Game />;
  }
}

export default App;
