import React, { Component } from "react"
import List from './modules/list/list'
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