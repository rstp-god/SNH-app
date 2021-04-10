import React from "react"
import styled from "styled-components"
import List from './modules/list/list'

const Header = styled.div `
  wight: 100%;
  height: 50px;
  color-backgraunf: red;
`;

function App() {
    return ( 
      <>
      <Header> Hell </Header>
      <List></List>
      <List></List>
      <List></List>
      </>
    )
}

export default App;