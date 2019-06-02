import React, { Component } from "react";
import "./Game.css";
import GameStatus from "../GameStatus/GameStatus";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      noOfMoves: 0
    };
  }

  checkWinner() {
    let winCombinations = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ];

    for (let i = 0; i < winCombinations.length; i++) {
      const [a, b, c] = winCombinations[i];
      if (
        this.state.board[a] &&
        this.state.board[a] === this.state.board[b] &&
        this.state.board[a] === this.state.board[c]
      ) {
        this.setState({
          winner: this.state.currentPlayer
        });
      }
    }
  }

  handleSquareClick(index) {
    if (
      !this.state.winner &&
      this.state.board[index] === null &&
      this.state.noOfMoves <= 9
    ) {
      let newBoard = this.state.board;
      let moves = this.state.noOfMoves;
      newBoard[index] = this.state.currentPlayer;
      this.setState({
        currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
        board: newBoard,
        noOfMoves: moves + 1
      });
      this.checkWinner();
    }
  }

  resetGame(e) {
    this.setState({
      currentPlayer: "X",
      winner: null,
      board: Array(9).fill(null),
      noOfMoves: 0
    });
  }

  renderGrid() {
    return this.state.board.map((box, index) => (
      <div
        className="box"
        key={index}
        onClick={() => this.handleSquareClick(index)}
      >
        {box}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <GameStatus
          currentPlayer={this.state.currentPlayer}
          winner={this.state.winner}
          noOfMoves={this.state.noOfMoves}
          resetGame={(e) => {
						this.resetGame(e);
					}}
        />
        <div className="board">{this.renderGrid()}</div>
      </div>
    );
  }
}

export default Game;
