import React from 'react'
import Login from './views/Login'
import {BrowserRouter as Router, Switch,Link,Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

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
