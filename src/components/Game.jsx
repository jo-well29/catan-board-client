import React from 'react'
import '../styles/Game.css'
import Territory from './Territory'
import axios from 'axios'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const terrains = ['Brick', 'Brick', 'Brick', 'Ore', 'Ore', 'Ore', 'Sheep', 'Sheep', 'Sheep', 'Sheep', 'Lumber', 'Lumber', 'Lumber', 'Lumber', 'Wheat', 'Wheat', 'Wheat', 'Wheat']
const number_chits = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12]






class Game extends React.Component {

    shuffledArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }


    handleSubmit = (e, shT, shN, clicked) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(shT, shN)
        let body = {
            name: e.target.name.value,
            tiles: shT,
            probability: shN
        }
        console.log(clicked)
        clicked &&
        this.postBoard(body)
    }

    postBoard = (body) => {
        console.log(body)
        axios.post(`/boards`,

            body
        )
            .catch(error => console.error(error))
    }



    render() {
        let shT = this.shuffledArray(terrains)
      
        let shN = this.shuffledArray(number_chits)
        let arrTopRow = []
        let arrSecondRow = []
        let arrThirdRow = []
        let arrFourRow = []
        let arrFiveRow = []



        let mapTerrain = shT.map((tile, idx) => {
            return shN.map((num, index) => {

                if (idx === index) {
                    if (idx < 3) {
                        arrTopRow.push([num, tile])
                    }
                    else if ((idx >= 3 && idx < 7)) {
                        arrSecondRow.push([num, tile])
                    }
                    else if ((idx >= 7 && idx < 12)) {
                        arrThirdRow.push([num, tile])
                    }
                    else if ((idx >= 12 && idx < 16)) {
                        arrFourRow.push([num, tile])
                    }
                    else if ((idx >= 16 && idx < 22)) {
                        arrFiveRow.push([num, tile])
                    }

                }

            })
        })
        let topRow = arrTopRow.map(e => {

            return <Territory num={e[0]} tile={e[1]}></Territory>
        })
        let secondRow = arrSecondRow.map(e => {

            return <Territory num={e[0]} tile={e[1]}></Territory>
        })
        let thirdRow = arrThirdRow.map(e => {

            return <Territory num={e[0]} tile={e[1]}></Territory>
        })
        let fourthRow = arrFourRow.map(e => {

            return <Territory num={e[0]} tile={e[1]}></Territory>
        })
        let fifthRow = arrFiveRow.map(e => {

            return <Territory num={e[0]} tile={e[1]}></Territory>
        })
console.log(mapTerrain)
        console.log(arrTopRow, arrSecondRow, arrThirdRow, arrFourRow, arrFiveRow)
        return (
            <div className="game">
                <div className="upper-part">
                    <Header />
                    <div className="links">
                    <i className="right"></i>
                        <NavLink className="navlinks" exact to='/myboard' activeClassName="active">myBoard</NavLink>
                    </div>
                    <div className="form">
                        <form onSubmit={(e) => this.handleSubmit(e, shT, shN, 'clicked')}>
                            <input type="text"
                                name="name"
                                placeholder="Name of Board"
                            />
                            <button>Save Board!</button>
                        </form>
                    </div>
                </div>
                <div className="hexagon">
                    <div className="rows-container">
                        <div className="topRow">{topRow}</div>
                        <div className="secondRow">{secondRow}</div>
                        <div className="thirdRow">{thirdRow}</div>
                        <div className="fourthRow">{fourthRow}</div>
                        <div className="fifthRow">{fifthRow}</div>
                    </div>
                </div>
            </div>
        )
    }
}






export default Game