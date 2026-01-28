import { useState } from 'react'
// import ReducerFunc from './components/ReducerFunc'
import UseMemo from './components/UseMemo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseMemo />
  )
}

export default App
