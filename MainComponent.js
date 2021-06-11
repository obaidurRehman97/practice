import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {Home,About,Login,People} from './views'

const MainComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/people' component={People}/>
            </Switch>
        </Router>
    )
}

export default MainComponent
