import React,{useState} from 'react'
import { connect,useSelector,useDispatch } from 'react-redux'
import { increment, decrement } from '../actions'
import InnerCardBoard from "./InnerCardBoard"
function CardBoard() {
    // let [count, setCount] = useState(counter)
    const count = useSelector(state => state.counters)
    const dispatch = useDispatch();
    const text = "sfdfgdsgstsedsfks;ldjgfelrtopejrfgsjglk"
    return (
      <div>
        <h1>count : {count}</h1>
        <InnerCardBoard score={{
            text : text,
            count : count,
          }}>
          </InnerCardBoard>
      <div className="buttons">
      <button
        onClick={() => dispatch(decrement(1))}
        className="button is-primary"
      >
        -1
      </button>
      <button onClick={() => dispatch(decrement(2))} className="button is-link">
        -2
      </button>
      <button onClick={() => dispatch(decrement(3))} className="button is-info">
        -3
      </button>
    </div>
      </div>
    )
}

// const mapStateToProps = function (state) {
//   return {
//     counter: state.counters || 0
//   }
// }

// export default connect(mapStateToProps)(CardBoard)
export default CardBoard