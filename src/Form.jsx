import { useState } from "react"

export default function Form () {
  const [answer, setAnswer] = useState('')
  function handleChange (event) {
    setAnswer(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    const correct = answer === '2'
    console.log('correct', correct)
  }
  const answered = answer !== ''
  const button = answered && <button>Submit!!!</button>
  return (
    <form onSubmit={handleSubmit}>
      <p>1 + 1 = ???</p>
      <input value={answer} onChange={handleChange} />
      {button}
    </form>
  )
}