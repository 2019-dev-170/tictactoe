import React, {Component} from 'react';
import './Game.css';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            board : Array(9).fill(null)
        }
    }

    handleSquareClick(index){

        let newBoard = this.state.board;
        newBoard[index] = "X";
        this.setState({
            board :  newBoard        
        })
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