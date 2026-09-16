import { useState } from 'react'
import ReducerFunc from './components/ReducerFunc'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ReducerFunc />
  )
}

export default App
