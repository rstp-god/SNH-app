import React, { Component } from "react"
import styled from "styled-components"
import List from './modules/List/List'

const Header = styled.div `
  wight: 100%;
  height: 50px;
  color-backgraunf: red;
`;

export default class App extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Header> Hell </Header>
      <List title = 'Gay'></List>
      <List title = 'You'></List>
      <List title = 'pedro'></List>
      </>      
    )
  }
};