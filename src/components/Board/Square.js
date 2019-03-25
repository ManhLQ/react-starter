import React from 'react';
import './square.scss';

export class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}