import React, { Component } from "react";
import styled from "styled-components";
import {connect} from "react-redux";

const Container= styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 0 auto;    
`

class Error extends Component {

    render() {
        return (
            <Container>
                <h1>Error!</h1>
            </Container>
        )
    }

}



export default  connect()(Error);