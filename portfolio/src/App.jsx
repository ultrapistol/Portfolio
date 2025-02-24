import { useState } from 'react'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from './components/Works/works';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
    </>
  )
}

export default App
