import React from 'react'

import data from './data'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
      <div>
        <Navbar />
        <Home socmed={data.socmed}/>
        <Projects projects={data.projects}/>
        <About skills={data.skills}/>
        <Contact />
        <Footer socmed={data.socmed}/>
      </div>
  )
}

export default App
