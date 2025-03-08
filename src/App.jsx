import Hello from "./Hello"
import Count from "./Count"
import Form from "./Form"

export default function App () {
  return (
    <div id='wrapper'>
      <Form />
      <Count />
      <Hello person='Dorothy' />
      <Hello person='Zelda' />
      <Hello person='Tallulah' />
    </div>
  )
}