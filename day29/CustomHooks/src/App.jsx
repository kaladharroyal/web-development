import { useState } from 'react'
import './App.css'
import CounterComponents from './components/CounterComponents'


function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterComponents />
  )
}

export default App
