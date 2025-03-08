export default function Count () {
  function handleClick () {
    console.log('click')
  }
  return (
    <button onClick={handleClick}>Count: 0</button>
  )
}