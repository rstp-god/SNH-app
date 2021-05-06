import React from "react";
import styled from "styled-components";
import logoImg from "./../../img/logo.png"


const Container = styled.div`
  margin: 0 auto;
  height: 100px;
  /* min-width: 260px; */
  /* max-width: 1200px; */
  box-sizing: border-box;
`
const Head = styled.header`
  background-color: #FFF;
  /* width: 100%; */
  height: 100px;
  float: left;
`

const Head2 = styled(Container)`
  margin: 30px 0;
  height: 40px;
  width: calc(240px + (1100 - 240) * ((100vw - 280px) / (1200 - 280)));
  background-color: #FFF;
  float: left;
  `

// const H1 = styled.h1`
  // height: 40px;
  // margin:0;
  // width: 100px;
  // float: left;
  // color: #DFD4D4;
  // font-size: 25px;
// `

const Logo = styled.div`
  font-size: 28px;
  color: #171515;
  width: calc(40px + (80 - 40) * ((100vw - 280px) / (1200 - 280)));
  height: calc(40px + (80 - 40) * ((100vw - 280px) / (1200 - 280)));
  border: 2px;
  border-radius: 50px;
  background-image: url(${logoImg});
  margin: calc(30px + (10 - 30) * ((100vw - 280px) / (1200 - 280))) 0;
  float: left;
`

const Burger = styled.img`
  width: 40px;
  height: 40px;
  float: right;
  margin: 0;
  border-radius:5px;
  background-image: url(${window.location.origin + "/img/Burger.png"});
  &:hover{
    background-image: url(${window.location.origin + "/img/hBurger.png"});
  }
`

const Menu = styled.menu`
  width: calc(240px + (1060 - 240) * ((100vw - 280px) / (1200 - 280)));
  height: 30px;
  float: right;
  margin: 0;
  padding: 0px 0;
  font-size: 25px;
`

const Btn = styled.a`
  padding: 5px 0;
  width: calc(50px + (240 - 50) * ((100vw - 280px) / (1200 - 280))); 
  height: 30px;
  text-align: center;
  font-size: 12px;
  display: inline-block;
  /* margin: 0 1%; */
  /* border: 2px solid #DFD4D4; */
  box-sizing: border-box;
  border-radius: 10px;
  color: #171515;
&:hover{
  width: 24%; 
  background-color: #DFD4D4;
  color: #000;
  border: 2px solid #000;
  text-align: center;
-webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
-moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719)}
`

let menuStyle = {
  display: 'none'
};

    let c = true
class Header extends React.Component{
  MenuBurger = (e) =>{
    let mi = document.querySelector('menu')
    if(c){
      mi.style.display  = "block";
      c = false
    }else{
      mi.style.display  = "none";
      c = true
    }
  }
render(){

  return (
    <Head>
      <Container>
          <Logo></Logo>
        <Head2>
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