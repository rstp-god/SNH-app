<<<<<<< HEAD
import React, { Component } from "react"
import styled from "styled-components"
import List from './modules/List/List'
import Header from "./Header"


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