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


import './App.css'
import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App
