import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Game from '../components/Game'
import MyBoard from '../components/MyBoard'
import Board from '../components/Board'
import HomePage from '../components/HomePage'


export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/myboard' component={MyBoard} />
            <Route exact path='/board' component={Board} />
        </Switch>
    )
}