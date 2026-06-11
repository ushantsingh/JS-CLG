// import React from 'react'
// import New, { About } from './New'

// const App = () => {
//   return (
//     <div>
//       <New />
//       <About/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let data = "Hello meri Jaan 🙂"
//   return (
//     <div>
//       <Home d={data} />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'
// import Home from './Home'

// const App = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Click</button>
//       <Home/>
//     </div>
//   )
// }

// export default App


// import { useRef } from "react";
// import { useState } from "react";


// // Stopwatch: start, stop, reset
// import React from 'react'

// const App = () => {

//   const [time, setTime] = useState(0);
//   const intervalRef = useRef(null);


//   function handleStart() {  
//     if (intervalRef.current != null) {
//       return;
//     }

//     intervalRef.current = setInterval(() => {
//       setTime(time => time + 1);
//     },1000)
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current)
//     intervalRef.current = null;
//   }
  
  
//   function handleReset() {
//     intervalRef.current = null;
//     clearInterval(intervalRef.current);
//     setTime(0);
//   }

//   return (
//     <>
//       <h1>Timer {time}</h1>
//       <div>
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handleStop}>Stop</button>
//           <button onClick={handleReset}>Reset</button>
//       </div>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [input, setInput] = useState('')
//   const[showText, setShowText ] = useState('')

  
//   return (
//     <div>
//       {/* {input} */}
//       <h1>{showText}</h1>
//       <input name='input' value={input} type="text" onChange={(e) => {
//         setInput(e.target.value)
//       }} />
      
//       <button onClick={() => {
//         setShowText(input)
//         setInput("")
//       }}>Click</button>
//     </div>
//   )
// }

// export default App


// import './App.css'
// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App


// useState se humara code baarbar re-render hoga
// useEffect Hook:- agar hume api call baar baar ya unncessary call nhi krwana hai toh useffect use karange


// import React, { useEffect, useState } from 'react'
// const App = () => {
//   const [count, setCout] = useState(0)
//   const [city, setCity] = useState('goa')

//   console.log("hii");
  
//   useEffect(() => {
//     console.log("Hello"); 
//   }, [city])
//   // console.log("Hello"); //Yha pe useState ke karan baar baar re-render ho rha hai pura code 
  
//   return (
//     <div>
//       <h1>{count}</h1>
//       <h2>{city}</h2>
//       <button onClick={()=>{setCity('Delhi')}}>Change</button>
//       <button onClick={()=>{setCout(count+1)}}>Click</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [city, setCity] = useState('goa')
//   console.log("hello");
  
//   useEffect(() => {
//     console.log("hello");
//   }, [])

//   return (
//     <div>
//       <h2>{city}</h2>
//       <button onClick={()=>{setCity('delhi')}}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'
// import './App.css'

// const App = () => {
//   const [apiData, setApiData] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data.products)
//         setLoading(false)
//       })
//   }, [])

//   function handleDelete(id) {
//     setApiData(apiData.filter((product) => product.id !== id))
//   }

//   if (loading) {
//     return (
//       <div className="loader-wrapper">
//         <div className="spinner"></div>
//         <p className="loader-text">Loading Products...</p>
//       </div>
//     )
//   }

//   return (
//     <div className="page">
//       <h1 className="page-title">🛒 Product Store</h1>
//       <p className="page-subtitle">{apiData.length} products available</p>
//       <div className="cards-grid">
//         {apiData.map((product) => (
//           <div className="card" key={product.id}>
//             <div className="card-img-wrapper">
//               <img src={product.thumbnail} alt={product.title} className="card-img" />
//               <span className="card-category">{product.category}</span>
//             </div>
//             <div className="card-body">
//               <h2 className="card-title">{product.title}</h2>
//               <p className="card-description">{product.description?.slice(0, 70)}...</p>
//               <div className="card-meta">
//                 <span className="card-price">${product.price}</span>
//                 <span className="card-rating">⭐ {product.rating}</span>
//               </div>
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(product.id)}
//               >
//                 🗑️ Delete Product
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App



// // TASK:-

// import React from 'react'
// import Task from './Task'

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Navbar from './Navbar'
// import ContactUs from './ContactUs'
// import Home from './Home'
// import About from './About'
// import { Routes, Route } from "react-router-dom"
// import Task from './Task'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//         <Route path="/about" element={<About/>}></Route>
//         <Route path="/task" element={<Task/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import TodoList from './TodoList'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <TodoList/>
//     </div>
//   )
// }

// export default App


// UseReducer:- it is like useState but more powerful

// import React from 'react'
// import CounterUseReduceer from './CounterUseReduceer'

// const App = () => {
//   return (
//     <div>
//       <CounterUseReduceer/>
//     </div>
//   )
// }

// // export default App


// import React from 'react'
// import Home from './Home'

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Home from './Home'
// import Navbar from './Navbar'
// import './App.css'
// import {Routes, Route} from 'react-router-dom'
// import Cart from './Cart'

// const App = () => {
//   const [apiData, setApiData] = useState([])
//   const [cart, setCart] = useState([])
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home apiData={apiData } setApiData={setApiData} cart={cart} setCart={setCart} /> } />
//         <Route path='/cart' element={<Cart cart={cart}/> } />
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import TodoList from './TodoList'


// const App = () => {
//   return (
//     <div>
//       <TodoList/>
//     </div>
//   )
// }

// export default App


// USE MEMO:-

// import React, { useMemo } from 'react'
// import useCounter from './useCounter'

// const App = () => {
//   let { count, inc, dec, reSet } = useCounter(0)

//   let total = useMemo(() => {
//     let res = 0
//     for (let i = 0; i < 1000000000; i++){
//       res += i
//     }
//   }, [])
//   return (
//     <div>
//       <h3>{count}</h3>
//       <h3>{total}</h3>
//       <button onClick={inc}>++</button>
//       <button onClick={dec}>--</button>
//       <button onClick={reSet}>Reset</button>
//     </div>
//   )
// }

// export default App



// FUNCIONS ko MEMO mai kaise use krte hai 
// MEMO for functions
// Memo child wale ko rerender hone se rokta hai 
import React, { memo, useState } from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>add</button>
      <Child/>
    </div>
  )
}

// const Child = () => {
  // console.log("hello");
  
  // return (
  //   <div>
  //     hello
  //   </div>
  // )
// }

let Child = memo(function () {
    console.log("hello");
  
  return (
      <div>
        hello
      </div>
    )
  }
)

export default App
