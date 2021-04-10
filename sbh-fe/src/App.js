import React from "react";
import styled from "styled-components";

const Container = styled.div`
  wight: 100%;
  height: 50px;
  color-backgraund: red;
`
const Header = styled(Container)`

`

const Name = styled.h1`

`

const Menu = styled.ui`

`

const MBlock = styled.li`

`

const Main = styled(Container)`
  wight: 100%;
  color: blue;
`

const Footer = styled(Container)`

`

function App() {
  return (
    <Container>
      <Header>
        <Menu>
          <MBlock></MBlock>
          <MBlock></MBlock>
          <MBlock></MBlock>
        </Menu>
        <Name>MATH</Name>
      </Header>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </Container>

  )
}

export default App;