import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SigninPage from './pages/signin'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SigninPage />
  )
}

export default App
