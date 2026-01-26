import { useState } from 'react'
import UncontrolledForm from './components/UncontrolledForm'
import FormWithValidation from './components/FormWithValidation'
import MultiStepForm from './components/MultiStepForm'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from './components/BasicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* <BasicForm /> */}
        {/* <UncontrolledForm /> */}
        {/* <FormWithValidation /> */}
        <MultiStepForm />
      </div>


  )
}

export default App
