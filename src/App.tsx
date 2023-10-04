import './App.css'
import { List } from './components/list/list-item/list'

const list = [
  {
    name: 'hi',
    checked: false
  },
  { name: 'hello', checked: true },
  { name: 'hey', checked: false }
]

function App () {
  return (
    <>
      <h1>App</h1>
      <List list={list} />
    </>
  )
}

export default App
