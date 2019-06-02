import React, {Component} from 'react';
import './Game.css';

class Game extends Component {

    render (){
        return(

            <div className="board">
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
                <div className = "box"></div>
            </div>

        );
    }

}

export default Game;