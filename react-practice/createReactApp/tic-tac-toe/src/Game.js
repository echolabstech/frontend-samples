import React from 'react';
import './Game.css';

const players = {0: 'X', 1: 'O'};

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
  renderSquare(index) {
    return <Square value={players[this.props.squares[index]]}
                   onClick={() => this.props.onClickHandler(index)}
           />;
  }

  render() {
    return (
      <div>
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

function BoardStateHistory(props) {
  console.log(props.boardStateHistory);
  return props.boardStateHistory.map((boardState, index) => {
    let message = 'Start!';
    if (index > 0) message = 'Go to move # ' + index;
    return (
      <li key={index}>
        <button onClick={() => props.onClickHandler(index)}>{message}</button>
      </li>
    )
  });
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(undefined),
      playerTurn: 0,
    }
    this.boardStateHistory = [this.state.squares];
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeBoardStateHistoryHandler = this.onChangeBoardStateHistoryHandler.bind(this);
    this.have_winner = false;
    this.winConditions = [[0,1,2],
                          [3,4,5],
                          [6,7,8],
                          [0,3,6],
                          [1,4,7],
                          [2,5,8],
                          [0,4,8],
                          [2,4,6]]
  }

  onClickHandler(index) {
    if (this.have_winner) return;
    if (this.square_already_set(index)) return;
    const copyOfSquares = this.copySquares(index);
    this.boardStateHistory.push(this.state.squares);
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

  checkWinner(squares) {
    for(let i = 0; i < this.winConditions.length; i++) {
      const winCondition = this.winConditions[i];
      if (squares[winCondition[0]] !== undefined &&
          squares[winCondition[0]] === squares[winCondition[1]] &&
          squares[winCondition[0]] === squares[winCondition[2]])
      {
        this.have_winner = true;
        break;
      }
    };
  }

  togglePlayerTurn() {
    this.setState({playerTurn: this.state.playerTurn ? 0 : 1});
  }

  onChangeBoardStateHistoryHandler(index) {
    this.boardStateHistory = this.boardStateHistory.slice(0, index+1);
    // update playerTurn
    // update squares
  }

  render() {
    const player = players[this.state.playerTurn];
    let status = `Next player: ${player}`;
    if (this.have_winner) {
      status = `Winner winner, chicken dinner. Player ${player} wins!`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares}
                 onClickHandler={this.onClickHandler} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>
            <BoardStateHistory boardStateHistory={this.boardStateHistory}
                               onClickHandler={this.onChangeBoardStateHistoryHandler} />
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
