import React, { useEffect, useState } from 'react'

const Task = () => {

  const [search, setSearch] = useState('')
  const [apiData, setApiData] = useState([])
  // const [brand, setBrand] = useState('')

    async function apiCall() {
        if (!search.trim()) {
            alert('Beta kuch searh bhi kr le !!')
            return;
        }
        // console.log('ha ha ha ha');
        
        let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
        let data = await res.json()
      console.log(data);
      setApiData(data.products)
    }
  
  useEffect(() => {
      fetch('https://dummyjson.com/products').then((res) => {
        return res.json()

        }).then((data) => {
        console.log(data);
        setApiData(data.products)
      })
  }, [])
  
  function fun1() {
    let sorted = [...apiData].sort((a, b) => {
      return a.price - b.price
    })
    setApiData(sorted)
  }

  function fun2() {
    let sorted = [...apiData].sort((a, b) => {
      return b.price - a.price
    })
    setApiData(sorted)
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={apiCall}>Click</button>
      <button onClick={fun1}>Low</button>
      <button onClick={fun2}>High</button>

      {
        apiData.map((a) => {
          return (
            <>
            <h2>{a.price}</h2>
              <img src={a.thumbnail} alt="" />
              <h2>{a.title}</h2>
            </>
          )
        })
    }
    </div>
  )
}

export default Task
