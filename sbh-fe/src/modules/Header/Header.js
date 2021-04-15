import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  height: 100px;
  min-width: 260px;
  max-width: 1024px;
`
const Head = styled.header`
  background-color: #FF5D40;
  width: 100%;
  height: 100px;
  float: left;
`

const Head2 = styled(Container)`
  margin-top: 30px;
  height: 40px;
  width: 100px;
  max-width: 1004px;
  background-color: #37DD6F;
  float: left;
  padding: 0 10px;
`
const H1 = styled.h1`
  height: 35px;
  margin:0;
  width: 85px;
  float: left;
`

const Logo = styled.a`
  font-size: 30px;
  width: 35px;
  height: 35px;
  border: 2px;
  border-radius: 50px;
  background-color: #437DD4;
  display: inline-block;
`

const Menu = styled.menu`
  width: auto;  
  height: 40px;
  float: right;
  margin: 0;
  padding: 0;
`

const Btn = styled.button`
  padding: 0;
  width: 55px;  
  height: 40px;
  background-color: #437DD4;

`



function Header() {
  return (
    <Head>
      <Container>
        <Head2>
          <H1><Logo><center>M</center></Logo>ath</H1>
          <Menu>
          <Btn>Geom</Btn>
          <Btn>Algebra</Btn>
          <Btn>Physics</Btn>
        </Menu>
      </Head2>
      </Container>
    </Head>
  )
}

export default Header