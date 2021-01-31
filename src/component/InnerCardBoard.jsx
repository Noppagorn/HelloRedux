import React,{useState} from "react"
import {useSelector} from "react-redux"
function InnerCardBoard(props){
    // const [ count , setCount ] = useState(props.score.count)
    const [ text , setText ] = useState(props.score.text)
    const count = useSelector(state => state.counters)
    return (
        <div>
           <h1>TOP , {count} ----> {text}</h1> 
        </div>
    )
}

export default InnerCardBoard