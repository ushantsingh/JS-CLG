import { useState } from "react"

function useCounter(data = 0) {
  let [count, setCount] = useState(data)
  let inc = () => setCount(count + 1)
  let dec = () => setCount(count - 1)
  let reSet = () => setCount(0)
  return {count, inc, dec, reSet}
}

export default useCounter