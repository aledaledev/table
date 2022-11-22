import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import Table from './components/Table'

const AppContainer = styled.div`
  width: 100%;
  background:red;
`

const App = () => {
  return (
    <AppContainer>
      <Table/>
      <Form/>
    </AppContainer>
  )
}

export default App