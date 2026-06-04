import React, {  useState } from 'react'

const TodoList = () => {
    let [input, setInput] = useState("")
    let [todos, setTodos] = useState([]);
    let [index, setIndex] = useState(null)

    function del(id) {
        setTodos(todos.filter((a, b) => id !== b))
    }

    function edit(id) {
        if (index !== null) {
            setTodos(todos.map((a, b) => b === id ? index : a))
        }
        setIndex(id)
    }

    function handleAddOrUpdate() {
        if (input.trim() == "") {
            return;
        }

        if (index !== null) {
            let updateData = [...todos]
            updateData[index] = input
            setTodos(updateData)
        } else {
            setTodos([...todos, input])
            setInput("")
        }
    }

    return (
        <div>
            <h1>TodoList</h1>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a task' />
            <button onClick={handleAddOrUpdate}>{index !== null ? "Update" : "add"}</button>
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