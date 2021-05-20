import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  height: 100px;
  box-sizing: border-box;
`

const Foot = styled.footer`
  width:100%;
  padding: calc(0px + (30 - 0));
`

class Footer extends React.Component{
render(){

  return (
    <Container>
      <Foot>
        
      </Foot>
    </Container>
  )
}}

export default Footer
