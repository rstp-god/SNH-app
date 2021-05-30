import React, { Component } from "react";
import styled from "styled-components";
import {connect} from "react-redux";

const Container= styled.div`
    display : flex; 
    width : 100% ; 
    box-sizing : border-box; 
    margin: 0 auto; 
`

const Border = styled.div`
    display: flex;
    flex-direction : column ;
    margin : 0 auto; 
    margin-top: 5%;
    box-sizing : border-box; 
    padding: 1.5em;
    width : 80%;
    height : 100%;
    border : 1px solid black;   
    border-radius: 50px;
    -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    h1 { 
        margin: 0 auto; 
        font-weight:normal;
        letter-spacing: 2px;
    }
    p { 
        font-family: 'Lora', serif;
        font-size: 25px;
    }
`

class Error extends Component {

    render() {
        return (
            <Container>
                <Border>
                <h1>Error!</h1>
                <p>Sorry, наша база знаний переполнилась! Мы работаем над усвоением информации, как только откроются новые горизонты, вы узнаете об этом первыми!</p>
                </Border>
            </Container>
        )
    }

}



export default  connect()(Error);