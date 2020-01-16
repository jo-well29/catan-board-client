import React from 'react'
import '../styles/MyBoard.css'
import Header from './Header'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Axios from 'axios'


class MyBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            boards: []

        }
    }

    componentDidMount() {
        this.getBoards()
    }

    getBoards() {
        fetch('http://localhost:3000/boards'
        )
            .then(res => res.json())
            .then(jsonedBoards => this.setState({ boards: jsonedBoards }))
            .catch(error => console.error(error))
    }

    handleDelete = (id) => {
        let del = axios.delete(`http://localhost:3000/boards/${id}`)
            .then(() => {
                this.getBoards()
            })

    }

    handleUpdate = (e, id) => {
        const data = {
            name: this.state.name
        }
        this.getBoards()
        Axios.put(`http://localhost:3000/boards/${id}`, data)
            .then(updatedName => {

            })
            .catch(error => console.log(error))
        window.location.reload(false)
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }



    render() {
        const { boards } = this.state
        console.log(boards)
        return (
            <div className="myBoard">
                <Header />
                <div className="links">
                    <NavLink className="navlinks" exact to='/game' activeClassName="active">Back</NavLink>
                </div>
                <div className="boards-container">
                    {boards.map(board =>
                    <>
                        <div className="board-card">
                            <h1>{board.name}</h1>
                            <div className="board-delete">
                                <button onClick={() => this.handleDelete(board.id)}><p>Delete</p></button>
                            </div>
                        </div>
                        <div className="form">
                            <form onSubmit={(e) => this.handleUpdate(e, board.id)}>
                                <input type="text"
                                    name="name"
                                    placeholder="Name of Board"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <button>Change Name</button>
                            </form>
                        </div>
                        </>)}
                </div>
            </div>

        )
    }



}

export default MyBoard