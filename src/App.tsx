import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Research from './components/Research'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div id="about"><Hero /></div>
      <div id="experience"><Experience /></div>
      <div id="research"><Research /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App
