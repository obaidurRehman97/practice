import React from 'react'
import {connect} from 'react-redux'

const ComponentOne = (props) => {
    console.log(props)
    return (
        <div>
            <h4>ComponentOne count</h4>
            <h5>{props.count}</h5> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    }
}
export default connect(mapStateToProps)(ComponentOne)
