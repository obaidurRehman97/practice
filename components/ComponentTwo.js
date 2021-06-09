import React from 'react'
import {connect} from 'react-redux'

const ComponentTwo = (props) => {
    console.log(props)
    return (
        <div>
            <h4>ComponentTwo count</h4>
            <h5>{props.count}</h5> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    }
}
export default connect(mapStateToProps)(ComponentTwo)
