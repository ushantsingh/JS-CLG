// import { createContext } from "react";

import { createContext, useReducer } from "react";
import React from 'react'

// let context = createContext()

// export default context


let secContext = createContext()
export default secContext

let data = {
    apiData: [],
    cart: []
}


const Context = ({ children }) => {
    
    function reducer(state, action) {
        if (action.type === "add_Data") {
            return {
                ...state,
                apiData: action.payload
            }
        } 
    }

    let [state, dispatch] = useReducer(reducer, data)
  return (
    <div>
        <secContext.Provider value={{state, dispatch}}>
              {children}
        </secContext.Provider>
    </div>
  )
}

export { Context } 
