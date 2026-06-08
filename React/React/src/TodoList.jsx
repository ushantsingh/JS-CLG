// import React, {  useState } from 'react'

// const TodoList = () => {
//     let [input, setInput] = useState("")
//     let [todos, setTodos] = useState([]);
//     let [index, setIndex] = useState(null)

//     function del(id) {
//         setTodos(todos.filter((a, b) => id !== b))
//     }

//     function edit(id) {
//         if (index !== null) {
//             setTodos(todos.map((a, b) => b === id ? index : a))
//         }
//         setIndex(id)
//     }

//     function handleAddOrUpdate() {
//         if (input.trim() == "") {
//             return;
//         }

//         if (index !== null) {
//             let updateData = [...todos]
//             updateData[index] = input
//             setTodos(updateData)
//         } else {
//             setTodos([...todos, input])
//             setInput("")
//         }
//     }

//     return (
//         <div>
//             <h1>TodoList</h1>
//             <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a task' />
//             <button onClick={handleAddOrUpdate}>{index !== null ? "Update" : "add"}</button>
//             {todos.map((a, index) => (
//                 <div key={index}>
//                     <h3>{a}</h3>
//                     <button onClick={() => del(index)}>Delete</button>
//                     <button onClick={() => edit(index)}>Edit</button>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default TodoList


// // TODOLIST USING useReducer

// import React, { act, useReducer } from 'react'

// const TodoList = () => {
//     let initialData = {
//         input: "",
//         todos: [],
//         index: null
//     }

//     function reducer(state, action) {
//         if (action.type == "input") {
//             return {
//                 ...state, input: action.payload
//             }
//         }else if(action.type == "add_todo") {
//             return {
//                 input: "",
//                 todos: [...state.todos, state.input]
//             }
//         } else if (action.type == "deleteTodo") {
//           return {
//             ...state,
//             todos: state.todos.filter((_, id) => {
//               return id !== action.payload
//             })
//           }
//         } else if (action.type == "editTodo") {
//           return {
//             ...state,
//             todos: state.todos[action.payload],
//             index: action.payload
//           } 
//         } else if (action.type == "updateTodo") {
//           let updateTodo = [...state.todbnos]
//           updateTodo[state.index] = state.input
//           return {
//             ...state,
//             todos: updateTodo,
//             input: "",
//             index: null
//           }
//         }
//     }

//   let [state, dispatch] = useReducer(reducer, initialData)

//   function handleSubmit() {
//     if (state.index !== null) {
//       dispatch({type: "updateTodo"})
//     } else {
//       dispatch({type: "add_todo"})
//     }
//   }

//   return (
//     <div>
//       <h1>TODOLIST</h1>
//         <input onChange={(e) => dispatch({ type: "input", payload: e.target.value})} type="text" placeholder='Enter a task'/>
//       <button onClick={handleSubmit}>{state.index !== null ? "update" :}</button>
//           {
//             state.todos.map((a) => {
//                 return (
//                     <>
//                     <h2>{a}</h2>
//                     <button onClick={()=>dispatch({type: "deleteTodo"})}>Delete</button>
//                     <button onClick={()=>dispatch({type: "editTodo"})}>Edit</button>
//                     </>
//                 )
//             })
//           }
//     </div>
//   )
// }

// export default TodoList




// RUPESH BHAIYA KE CODES:-

// import React, { useReducer } from 'react'

// const TodoList = () => {
//   let data = {
//     input: "",
//     todos:[]
//   }
//   function reduser(state, action) {
//     if(action.type==)
       
    
    
//   }
// let [state,dispatch]=  useReducer(reduser,data)

//   return (
//     <div>
//       <input  onChange={()=>dispatch({type:"set_Input"})} />
//       <button>add</button>
//     </div>
//   )
// }

// export default TodoList
