import { useState } from 'react'
import { GlobalStyle } from "./GlobalStyle";
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  )
}

export default App
