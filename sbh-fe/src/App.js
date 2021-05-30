import React, { Component } from "react"; 
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import styled from 'styled-components' ; 



import List from './modules/List/List'; 
import Header from "./modules/Header/Header" ; 
import Inspect from "./modules/Formula Inspect/Inspect";
import Math from './modules/Math/Math'
import Physics from "./modules/Physics/Physics";
import Geometry from "./modules/Geometry/Geometry";
import Inform from "./modules/Inform/Inform";
import { blockChoised } from './actions/actions';
import { connect } from "react-redux";
import Error from "./modules/Error/Error";






const Wrapper = styled.div`
  width: 100%; 
  box-sizing : border-box; 
  margin: 0 auto; 
  max-width: 1200px; 
  height: 1200px; 
  display: flex; 
  flex-direction: column; 
  justify-content : space-between;
  align-items: center; 
`

function Home() {
  return ( 
  <Wrapper>
  <Math/>
  <Physics/>
  <Geometry/>
  <Inform/>
  </Wrapper> ) 
}

class App extends Component {

  choisedblock = () => { 
    this.props.blockChoised('math');
  } 

  
  render() {
    return (
      <Router>
      <>
      <Header/>
      <Switch>
      <Route path='/geom/inspect' component={Inspect}/> 
      <Route path='/math/inspect' component={Inspect}/> 
      <Route path='/physics/inspect' component={Inspect}/> 
      <Route path='/informatics/inspect' component={Inspect}/>
        <Route path='/error'>
          <Error/>
        </Route>
      <Route path='/math'> 
         <List block='math'></List>
      </Route>
      <Route path='/physics'> 
         <List block='physics'></List>
      </Route>
      <Route path='/geom'> 
         <List block='geom'></List>
      </Route>
      <Route path='/informatics'> 
         <List block='informatic'></List>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
      </>
      </Router> 
    )
  }
}

const mapStateToProps = (state)=> { 
  return {
    block: state.block
  }
}

const mapDispatchToProps ={
  blockChoised
}


export default connect(mapStateToProps,mapDispatchToProps)(App);