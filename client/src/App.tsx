import { Container } from '@material-ui/core'
import React from 'react'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Container fixed>
        <HomePage></HomePage>
      </Container>
    </div>
  )
}

export default App
