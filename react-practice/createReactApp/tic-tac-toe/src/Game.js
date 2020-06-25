import React from 'react';
import './Game.css';

function Square(props) {
  return (
    <button className="square" value=''
            onClick={props.onClick}
    >
      {props.value}
    </button>
  );
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
    const copyOfSquares = this.copySquares(index);
    this.checkWinner(copyOfSquares);
    if (!this.have_winner) this.togglePlayerTurn();
    this.updateSquareState(copyOfSquares);
  }

  square_already_set(index) {
    return this.state.squares[index] !== undefined;
  }

  copySquares(index) {
    const squares = this.state.squares.slice();
    squares[index] = this.state.playerTurn;
    return squares;
  }

  updateSquareState(squares) {
    this.setState({squares});
  }

  checkWinner(copyOfSquares) {
    for(let i = 0; i < this.winConditions.length; i++) {
      const winCondition = this.winConditions[i];
      const winConditionSquares = [copyOfSquares[winCondition[0]],
                       copyOfSquares[winCondition[1]],
                       copyOfSquares[winCondition[2]],
                      ];
      if (winConditionSquares.some(square => square === undefined)) continue; 
      if (winConditionSquares.every(square => square === this.state.playerTurn)) {
        this.have_winner = true;
        break;
      }
    };
  }

  togglePlayerTurn() {
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1});
  }

  render() {
    const player = this.players[this.state.playerTurn];
    let status = `Next player: ${player}`;
    if (this.have_winner) {
      status = `Winner winner, chicken dinner. Player ${player} wins!`;
    }

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
