import React from 'react'
import { Links, useParams } from 'react-router-dom'

const UserProfile = () => {
    let list = ["Rupesh Bhaiya", "Ushant", "Tishya", "Arya"]
    let { id } = useParams()
    console.log(id);
    
    let data = list.find((_, index) => {
        return id == index
    })
  return (
    <div>
      {data}
    </div>
  )
}

export default UserProfile
