import { useState } from 'react'
import Box from './component/Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box/>
    </div>
  )
}

export default App
