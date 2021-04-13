import React, { Component } from "react"; 


import List from './modules/List/List'; 
import Header from "./modules/Header/Header" ; 


export default class App extends Component {

  
  render() {
    return (
      <>
      <Header/>
      <List/>
      </>      
    )
  }
};