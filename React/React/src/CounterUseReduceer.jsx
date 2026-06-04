import React, { useReducer } from 'react'

const CounterUseReduceer = () => {

    function reducer(count, action) {
        if (action.type == "inc") {
            return count + 1
        } else if (action.type == "dec" && count > 0) {
            return count - 1
        } else if (action.type == "reset") {
            return 0
        } else {
            return count
        }
    }

    let [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type: "inc"})}>++</button>
        <button onClick={()=>dispatch({type: "dec"})}>--</button>
        <button onClick={()=>dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default CounterUseReduceer
