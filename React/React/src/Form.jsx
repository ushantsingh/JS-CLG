import React, { useState } from 'react'
import './App.css'

const Form = () => {
    let [input, setInput] = useState({
        name: "",
        email: "",
        passWord:""
    })

    function fun1(e) {
        console.log(e.target);
        let { name, value } = e.target
        setInput({...input, [name] : value})
        console.log(input);
        
    }

  return (
    <div>
          <form action="">
              <input name='name' value={input.name} onChange={fun1} type="text" placeholder='Enter your name'/>
              <input name='email' value={input.email} onChange={fun1} type="email" placeholder='Enter your email'/>
              <input name='passWord' value={input.passWord} onChange={fun1} type="password" placeholder='Enter your password'/>
              <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
