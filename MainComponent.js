import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {Home,About,Login} from './views'

const MainComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/home' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </Router>
    )
}

export default MainComponent
