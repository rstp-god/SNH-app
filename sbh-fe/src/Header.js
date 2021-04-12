import React from "react";
import styled from "styled-components";

const Container = styled.div`
  wight: 100vh;
  height: 100px;
  background-color: red;
  padding-top: 20px;
`
const Head = styled(Container)`
  wihght: 100%;
  height: 20px;
  margin:0;
`

const Name = styled.h1`
  padding-left: 20px;
  background-color: green;
`

const Logo = styled.a`
  font-size: 40px;
  wight: 20px;
  height: 20px;
  border: 2px;
  border-radius: 20px;
  float: left;
  background-color: blue;
`


function Header() {
  return (
    <Container>
      <Head>
        <Name><Logo>M</Logo>ath</Name>
        {/* <Menu> */}
          {/* <MBlock>Algebra</MBlock> */}
          {/* <MBlock>Geom</MBlock> */}
          {/* <MBlock>Physics</MBlock> */}
        {/* </Menu> */}
      </Head>
    </Container>

  )
}

export default Header