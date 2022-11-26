import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import Table from './components/Table'

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
  width: 100%;
  background:#e1dbe7;
`

const App = () => {
  return (
    <AppContainer style={{height:'100%'}}>
      <Table/>
      <Form/>
    </AppContainer>
  )
}

export default App