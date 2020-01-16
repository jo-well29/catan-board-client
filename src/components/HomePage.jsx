import React from 'react'
import '../styles/HomePage.css'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage-container">
                <h1>Welcome</h1>
                <div className="text">
                    <h4>The Scottish Pimp is a Catan Board Game Generator packed with many different styles for you to choose. Browse and Save your favorite Boards. Use the Filter to Help Narrow Your Search Results. Most Importantly, HAVE FUN!</h4>
                </div>

            </div>
            <NavLink className="navlinks" exact to='/game' activeClassName="active">Generate Board</NavLink>

        </div>
    )
}

export default HomePage