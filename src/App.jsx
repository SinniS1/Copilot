import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Copilot from './Components/copilotEffect/Copilot'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Copilot />
    </div>
  )
}

export default App
