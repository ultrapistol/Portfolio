import { useState } from 'react'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default App
