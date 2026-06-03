import React, { useEffect, useState } from 'react'

const TodoList = () => {
    let [input, setInput] = useState("")
    let [todos, setTodos] = useState([]);

    function del(id) {
        setTodos(todos.filter((a, b) => id !== b))
    }

    function edit(id) {
        let editData = prompt("Edit your task:", todos[id])
        if (editData !== null) {
            setTodos(todos.map((a, b) => b === id ? editData : a))
        }
    }

    return (
        <div>
            <h1>TodoList</h1>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a task' />
            <button onClick={() => setTodos([...todos, input])}>add</button>
            {todos.map((a, index) => (
                <div key={index}>
                    <h3>{a}</h3>
                    <button onClick={() => del(index)}>Delete</button>
                    <button onClick={() => edit(index)}>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList