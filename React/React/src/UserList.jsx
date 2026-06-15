import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    let list = ["Rupesh Bhaiya", "Ushant", "Tishya", "Arya"]
    let navigate = useNavigate()

    function fun1(id) {
        console.log(id);
        navigate(`/profile/${id}`)
    }
  return (
    <div>
        {
              list.map((a, id) => {
                  return (
                      <>
                          <li>{a}</li>
                          <button onClick={()=> fun1(id)}>Click</button>
                      </>
                  )
              })
        }
    </div>
  )
}

export default UserList
