import React from 'react'
import '../styles/Territory.css'



class Territory extends React.Component {3
    render() {
        let color
        if (this.props.tile === "Wheat") {
            color = "#fcf966"
        } else if (this.props.tile === "Ore") {
            color = "#3b3b3b"
        } else if (this.props.tile === "Lumber") {
            color = "#034d00"
        } else if (this.props.tile === "Brick") {
            color = "#4d0000"
        } else if (this.props.tile === "Sheep"){
            color = "#9dd691"
        } else {
            color = this.props.tile
        }

        return (
            <div className="tile-container">
                <div className="tile-color" style={{ color: color, backgroundColor:color }}></div>
                <div className="num-tile">{this.props.num}</div>
            </div>
        )
    }
}

export default Territory