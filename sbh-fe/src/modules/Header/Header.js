import React from "react";
import styled from "styled-components";
import logoImg from "./../../img/logo.png"
import {Link} from 'react-router-dom'; 



const Container = styled.div`
  margin: 0 auto;
  height: 100px;
  box-sizing: border-box;
  padding: 0 calc(0px + (15 - 0) * ((100vw - 280px) / (1200 - 280)));
`
const Head = styled.header`
  /* width: 100%; */
  height: 100px;
  float: left;
  position :relative;
`

const Head2 = styled(Container)`
  margin: 30px auto;
  height: 40px;
  width: calc(240px + (1100 - 240) * ((100vw - 280px) / (1200 - 280)));
  float: left;
  `

const Logo = styled.div`
  font-size: 28px;
  color: #171515;
  width: calc(40px + (80 - 40) * ((100vw - 280px) / (1200 - 280)));
  height: calc(40px + (80 - 40) * ((100vw - 280px) / (1200 - 280)));
  border-radius: 50px;
  background-image: url(${logoImg});
  margin: calc(30px + (10 - 30) * ((100vw - 280px) / (1200 - 280))) 0;
  float: left;
  transition: 0.3s all linear;
  letter-spacing: 3px; 
  &:hover{
    width: calc(45px + (85 - 45) * ((100vw - 280px) / (1200 - 280)));
    height: calc(45px + (85 - 45) * ((100vw - 280px) / (1200 - 280)));
  }
`

const Burger = styled.img`
  width: calc(20px + (40 - 20) * ((100vw - 280px) / (760 - 280)));
  height: calc(20px + (40 - 20) * ((100vw - 280px) / (760 - 280)));
  float: right;
  margin: calc(15px + (0 - 15) * ((100vw - 280px) / (760 - 280))) 0;
  border-radius:5px;
  background-image: url(${window.location.origin + "/img/Burger.png"});
  &:hover{
    background-image: url(${window.location.origin + "/img/hBurger.png"});
  }

  @media (min-width: 760px) {
    display: none;
  }
`

const Menu = styled.menu`
  height: 30px;
  float: right;
  margin: 0;
  padding: 0px 0;
  font-size: 25px;
  @media (max-width: 760px) {
    display: none;
    width: calc(170px + (950 - 170) * ((100vw - 280px) / (1200 - 280)));
  }
  @media (min-width: 760px){
    width: calc(210px + (990 - 210) * ((100vw - 280px) / (1200 - 280)));
  }
`

const Btn = styled(Link)`
  padding: 5px 0;
  width: 20%; 
  height: 30px;
  text-align: center;
  font-size: calc(8px + (12 - 8) * ((100vw - 280px) / (1200 - 280)));
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  color: #171515;    
  transition: 0.3s all linear;
  letter-spacing: 3px; 
  margin: 0 2%;
&:hover{
    width: 24%; 
    background-color: #DFD4D4;
    color: #000;
    border: 2px solid #000;
    text-align: center;
    -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    cursor: pointer;
  }
`

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
          <Menu>
            <Btn to='/geom'>Geom</Btn>
            <Btn to='/math'>Algebra</Btn>
            <Btn to='/physics'>Physics</Btn>
            <Btn to='/informatics'>Inform</Btn>
        </Menu>
      </Head2>
      </Container>
    </Head>
  )
}}

export default Header