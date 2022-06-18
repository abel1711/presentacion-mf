import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppRouter } from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
