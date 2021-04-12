import React, { Component } from "react"
import List from './modules/List/List'
import Header from "./modules/Header/Header"


export default class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <Header/>
      <List title = 'Gay'></List>
      <List title = 'You'></List>
      <List title = 'pedro'></List>
      </>      
    )
  }
};