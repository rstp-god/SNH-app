import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  height: 100px;
  min-width: 260px;
  max-width: 1024px;
  box-sizing: border-box;
`
const Head = styled.header`
  background-color: #171515;
  width: 100%;
  height: 100px;
  float: left;
`

const Head2 = styled(Container)`
  margin-top: 30px;
  height: 40px;
  width: 100%;
  max-width: 1004px;
  background-color: #DFD4D4;
  float: left;
  padding: 0 0 0 10px;
  border-radius: 10px;
`
const H1 = styled.h1`
  height: 40px;
  margin:0;
  width: 100px;
  float: left;
  color: #171515;
  font-size: 25px;
`

const Logo = styled.a`
  font-size: 28px;
  color: #DFD4D4;
  width: 40px;
  height: 40px;
  border: 2px;
  border-radius: 50px;
  background-color: #171515;
  display: inline-block;
`

const Burger = styled.div`
  width: 40px;
  height: 40px;
  float: right;
  margin: 0;
  border-radius:5px 0 0 5px ;
  background-color: blue;
  &:click{
  }
`

const Menu = styled.menu`
  width: 80%;
  height: 30px;
  float: right;
  margin: 0;
  padding: 0px 0;
  min-width: 160px;
  max-width: 884px;
  font-size: 25px;
`

const Btn = styled.a`
  padding: 5px 0;
  width: 22%; 
  min-width: 50px; 
  height: 30px;
  text-align: center;
  font-size: 12px;
  display: inline-block;
  margin: 0 1%;
  border: 2px solid #FFF;
  box-sizing: border-box;
  border-radius: 10px;
&:hover{
  background-color: #171515;
  color: #DFD3D5;
  border: 2px solid #000;
  text-align: center;}
`

let menuStyle = {
  display: 'none'
};

class Header extends React.Component{
  MenuBurger = (e) =>{
    let mi = document.querySelector('menu')
    mi.style.display  = "block";
  }
render(){

  return (
    <Head>
      <Container>
        <Head2>
          <H1><Logo><center>M</center></Logo>ath</H1>
          <Burger onClick={this.MenuBurger}></Burger>
          <Menu style = {menuStyle}>
            <Btn>Geom</Btn>
            <Btn>Algebra</Btn>
            <Btn>Physics</Btn>
            <Btn>Inform</Btn>
        </Menu>
      </Head2>
      </Container>
    </Head>
  )
}}

export default Header