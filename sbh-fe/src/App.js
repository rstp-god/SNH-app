import React, { Component } from "react"; 
import {BrowserRouter as Router , Route} from 'react-router-dom';
import styled from 'styled-components' ; 



import List from './modules/List/List'; 
import Header from "./modules/Header/Header" ; 
import Inspect from "./modules/Formula Inspect/Inspect";
import Math from './modules/Math/Math'
import Physics from "./modules/Physics/Physics";
import Geometry from "./modules/Geometry/Geometry";


const Wrapper = styled.div`
  width: 100%; 
  box-sizing : border-box; 
  display: flex; 
  flex-direction: column; 
  justify-content : space-between;
  align-items: center; 
  border : 1px solid black;
  &item{
    padding-top:2%; 
  }
`



export default class App extends Component {

  
  render() {
    return (
      <Router>
      <>
      <Header/>
      <Route path='/list' component={List}/>
      <Route path='/inspect' component={Inspect}/>
      <Wrapper>
        <Math class='item'/>
        <Physics/>
        <Geometry/>
      </Wrapper>
      </>     
      </Router> 
    )
  }
}