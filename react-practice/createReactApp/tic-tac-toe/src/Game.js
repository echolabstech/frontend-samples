import React from 'react';
import './Game.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" value=''
              onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(undefined),
      playerTurn: 0,
    }
    this.players = {0: 'X', 1: 'O'};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  renderSquare(index) {
    return <Square value={this.state.squares[index]}
                   onClick={()=>this.onClickHandler(index)}
           />;
  }

  onClickHandler(index) {
    if (this.setSquareValue(index)) this.togglePlayerTurn();
  }

  setSquareValue(index) {
    if (this.state.squares[index]) return false;
    const squares = this.state.squares.splice(0);
    squares[index] = this.players[this.state.playerTurn];
    this.setState({squares});
    return true;
  }

  togglePlayerTurn() {
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1});
  }

  render() {
    const playerTurn = `Next player: ${this.players[this.state.playerTurn]}`;

    return (
      <div>
        <div className="playerTurn">{playerTurn}</div>
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* playerTurn */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
