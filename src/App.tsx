import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import Table from './components/Table'
import { UserProvider } from './context/UserContext'

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
  width: 100%;
  background:#e1dbe7;
`

const App = () => {
  return (
    <UserProvider>
      <AppContainer>
        <Table/>
        <Form/>
      </AppContainer>
    </UserProvider>
  )
}

export default App