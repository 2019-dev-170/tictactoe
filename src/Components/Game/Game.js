import React, {Component} from 'react';
import './Game.css';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            board : Array(9).fill(null),
            currentPlayer : "X"
        }
    }

    handleSquareClick(index){

        if(this.state.board[index] === null){
            let newBoard = this.state.board;
            newBoard[index] = this.state.currentPlayer; 
            this.setState({
                currentPlayer:  this.state.currentPlayer === "X" ? "O" : "X",
                board :  newBoard        
            })
        }
    }

    renderGrid(){
        return this.state.board.map(
            (box,index) => <div className="box" key={index} onClick={() => this.handleSquareClick(index)}>{box}</div>
        )
    }

    render (){
        return(

            <div className="board">
                {this.renderGrid()}
            </div>

        );
    }

}

export default Game;