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
    this.have_winner = false;
    this.players = {0: 'X', 1: 'O'};
    this.onClickHandler = this.onClickHandler.bind(this);
    this.winConditions = [[0,1,2],
                          [3,4,5],
                          [6,7,8],
                          [0,3,6],
                          [1,4,7],
                          [2,5,8],
                          [0,4,8],
                          [2,4,6]]
  }

  renderSquare(index) {
    return <Square value={this.players[this.state.squares[index]]}
                   onClick={()=>this.onClickHandler(index)}
           />;
  }

  onClickHandler(index) {
    if (this.have_winner) return;
    if (this.square_already_set(index)) return;
    this.setSquareValue(index);
    this.togglePlayerTurn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.check_winner();
  }

  square_already_set(index) {
    return this.state.squares[index] !== undefined;
  }

  setSquareValue(index) {
    const squares = this.state.squares.slice();
    squares[index] = this.state.playerTurn;
    this.setState({squares});
  }

  check_winner() {
    for(let i = 0; i < this.winConditions.length - 1; i++) {
      const winCondition = this.winConditions[i];
      const squares = [this.state.squares[winCondition[0]],
                       this.state.squares[winCondition[1]],
                       this.state.squares[winCondition[2]],
                      ];
      if (squares.every(square => this.players[square])) {
        console.log('winner winner chicken dinner!');
        this.have_winner = true;
        break;
      }
    };
  }

  togglePlayerTurn() {
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1});
  }

  render() {
    const status = `Next player: ${this.players[this.state.playerTurn]}`;

    return (
      <div>
        <div className="status">{status}</div>
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
