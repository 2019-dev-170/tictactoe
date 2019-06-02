import React, { Component } from "react";
import './GameStatus.css';
class GameStatus extends Component {
  renderStatus() {
    if (this.props.winner) {
      return <h3 className="win">{this.props.winner} is Winner</h3>;
    } else {
      if (this.props.noOfMoves === 9) {
        return <h3 className="draw">Match is a Draw</h3>;
      } else {
        return <h3>Current Player : {this.props.currentPlayer}</h3>;
      }
    }
  }

  render() {
    return <div>{this.renderStatus()}</div>;
  }
}

export default GameStatus
