import React, { useContext } from 'react'
import context from '../context'
// import { useState } from 'react'
// import A from './A.jsx';
// import A from './A.JSX';

// const Home = ({data}) => {
// console.log(data);

//   return (
//       <div>{data} </div>
//   )
// }

// export default Home

// const Home = ({d}) => {
// console.log(d);

//   return (
//       <div><A val={d} /></div>
//   )
// }

// export default Home


// const Home = () => {
//     console.log("hello")
    
//     return (
//     <div></div>
//   )
// }

// export default Home



// const Home = () => {
//   return (
//     <div>
//       Home 
//     </div>
//   )
// }

// export default Home



// import React from 'react'

const Home = () => {
  let data = useContext(context)
  return (
    <div>
      {data}
    </div>
  )
}

export default Home
