import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Section1 from './Components/Section1/Section1'
import Copilot from './Components/copilotEffect/Copilot'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App
