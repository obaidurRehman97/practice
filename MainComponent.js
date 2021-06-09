import React from 'react'
import {connect} from 'react-redux'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import Login from './views/Login'


const MainComponent = (props) => {
    console.log(props)
    const handleInc = () => {
        props.dispatch({
            type:"INCREMENT",
        })
    }
    const handleDec = () => {
        props.dispatch({
            type:"DECREMENT"
        })
    }
    return (
        <div style={{textAlign:'center'}}>
                <h2>MainComponent</h2>
                <h3>{props.count}</h3>
                <div style={{marginTop:10}}>
                    <button onClick={handleInc}>Increment</button>
                    <button onClick={handleDec}>Decrement</button>
                </div>

                <div style={{marginTop:20,flexDirection:'row'}}>
                    <ComponentOne/>
                    <ComponentTwo/>
                </div>
            </div>
    )
    
}
const mapStateToProps = (state) => {
    return {
      count: state.count
    }
}


export default connect(mapStateToProps)(MainComponent)
