import React from 'react';
import { Square } from './Square';
import './board.scss';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickCell = this.handleClickCell.bind(this);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClickCell(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClickCell(i)} />;
  }

  render() {
    const status = this.state.xIsNext ? 'X' : 'O';
    return (
      <div>
        <div className="status">Next player: {status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}