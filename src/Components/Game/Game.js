import React, {Component} from 'react';
import './Game.css';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            board : Array(9).fill(null),
            currentPlayer : "X",
            winner : null
        }
    }

    checkWinner(){
        let winCombinations = [
            ["0" , "1" , "2"],
            ["3" , "4" , "5"],
            ["6" , "7" , "8"],
            ["0" , "3" , "6"],
            ["1" , "4" , "7"],
            ["2" , "5" , "8"],
            ["0" , "4" , "8"],
            ["2" , "4" , "6"]
        ]

        for(let i=0; i< winCombinations.length ; i++){
            const [a,b,c] = winCombinations[i];
            if(this.state.board[a] && (this.state.board[a] === this.state.board[b]) && (this.state.board[a] === this.state.board[c])){
                this.setState({
                    winner :  this.state.currentPlayer 
                })    
            }
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
            this.checkWinner();
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