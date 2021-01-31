import React from "react"
import {connect} from "react-redux"

function ScoreBoard(props){
    return (
        <h1>{props.counters}</h1>
    )
}


function mapStateToProps(state){
    return {
        counters : state.counters || 0
    }
}

export default connect(mapStateToProps)(ScoreBoard)