import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './MainComponent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './redux/reducer'
import {BrowserRouter} from 'react-router-dom'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainComponent/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'))
