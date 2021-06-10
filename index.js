import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './MainComponent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './redux/reducer'
import {BrowserRouter} from 'react-router-dom'


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState===null){
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch (e) {
        console.log(e)
    }
}

const persistedStore = loadState()

const initialStore = persistedStore ? persistedStore : {
    loginStatus:false,
    email:"test@tester.com",
    password:"12345" 
}

const store = createStore(rootReducer,initialStore)

// console.log(store.getState())

store.subscribe(() => {
    saveState({
        loginStatus:store.getState().loginStatus,
        email:store.getState().email,
        password:store.getState().password
    })
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainComponent/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'))
