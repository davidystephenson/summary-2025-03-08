import { useState } from "react"
// let count = 10

export default function Count () {
  const [count, setCount] = useState(1)
  console.log('setCount', setCount)
  function handleClick () {
    console.log('click')
    // count += 1
    setCount(count + 1)
    console.log('count', count)
  }
  return (
    <button onClick={handleClick}>Count: {count}</button>
  )
}