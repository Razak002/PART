import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Section from './Components/Section'
import Works from './Components/Works'


function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
      <Works/>
    </div>
  )
}

export default App
