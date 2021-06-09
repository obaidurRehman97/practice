import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './MainComponent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './redux/reducer'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>
    ,document.getElementById('root'))
