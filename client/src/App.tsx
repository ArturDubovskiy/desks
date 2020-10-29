import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

const App: FC = () => (
  <div className="App">
    <NavBar></NavBar>
    <Container fixed>
      <HomePage></HomePage>
    </Container>
  </div>
)

export default App
