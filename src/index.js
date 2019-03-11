import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Welcome extends Component {
  render () {
    return (
      <h1>Hello, world</h1>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
