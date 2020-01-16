import React from 'react'
import '../styles/Board.css'



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div className="hexagon">
                <div className="board-row">
                </div>
            </div>
        )
    }
}

export default Board