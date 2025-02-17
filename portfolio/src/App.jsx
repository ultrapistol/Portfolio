import { useState } from 'react'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
    </>
  )
}

export default App
