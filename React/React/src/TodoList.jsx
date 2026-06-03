import React, { useEffect, useState } from 'react'

const TodoList = () => {
    let [input, setInput] = useState("")
    let [todos, setTodos] = useState([])

    useEffect(() => {
        localStorage.setItem("keys", JSON.stringify(todos))
    }, [todos])

    function del(id) {
        let updatedData = todos.filter((a, b) => {
            return id != b
        })
        setTodos(updatedData)
    }

    

  return (
    <div>
      <h1>TodoList</h1>
      <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a task'/>
          <button onClick={() => setTodos([...todos, input])}>add</button>
          {
              todos.map((a, index) => {
                  return (
                      <div>
                          <h3>{a}</h3>
                          <button onClick={()=>del(index)}>Delete</button>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default TodoList
