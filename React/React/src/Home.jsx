// import React, { useContext } from 'react'
// import context from '../context'
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



// // import React from 'react'

// const Home = () => {
//   let data = useContext(context)
//   return (
//     <div>
//       {data}
//     </div>
//   )
// }

// export default Home


import React, { useEffect } from 'react'

const Home = ({apiData, setApiData, cart, setCart}) => {
    console.log("carrtt");
    

    useEffect(() => {
        async function apiCall() {
            let res = await fetch('https://dummyjson.com/products')
            let data = await res.json()
            console.log(data);
            setApiData(data.products)
        }
        apiCall()
    }, [])
  return (
    <div id='card'>
      {
        apiData.map((a)=>{
          return(<div id='main_card' key={a.id}>
          <img src={a.thumbnail}/>
          {/* <h4>{a.title}</h4>
          <h6>{a.price}</h6> */}
          <button onClick={()=>setCart([...cart,a])}>add</button>
          </div>)
        })
      }
    </div>
  )
}

export default Home
