import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
`
const Head = styled(Container)`
  width: 100%;
  height: 40px;
  padding-top: 30px;
`

const Name = styled.h1`
  width: auto;
  height: 40px;
  background-color: green;
  margin: 0;
`

const Logo = styled.a`
  font-size: 30px;
  width: 35px;
  height: 35px;
  border: 2px;
  border-radius: 50px;
  background-color: blue;
  display: inline-block;
  padding: auto;
`

const Menu = styled.menu`
  width: 195px;  
  height: 40px;
  float: right;
  margin: 0;
  padding: 0;
`

const Btn = styled.button`
  width: 65px;  
  height: 40px;
  float: right;
  border-color: whith;
  background-color: green;
  border-width: 4px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
`

function Header() {
  return (
    <Container>
      <Head>
        <Name><Logo><center>M</center></Logo>ath
        <Menu>
          <Btn>Geom</Btn>
          <Btn>Algebra</Btn>
          <Btn>Physics</Btn>
        </Menu>
        </Name>
      </Head>
    </Container>

  )
}

export default Header