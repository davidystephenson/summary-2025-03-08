import Hello from "./Hello"
import Count from "./Count"

export default function App () {
  return (
    <div id='wrapper'>
      <Count />
      <Hello person='Dorothy' />
      <Hello person='Zelda' />
      <Hello person='Tallulah' />
    </div>
  )
}