export default function Hello (props) {
  console.log('props', props)
  return (
    <div>Hello {props.person}!!!</div>
  )
}