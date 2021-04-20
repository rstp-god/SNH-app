import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const Square = styled.div`
display: flex; 
justify-content: center;
margin-top:1%;
box-sizing : border-box; 
width : 30%;
height : 100%;
border : 1px solid black;
border-radius: 50px;
-webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
-moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
&:hover { 
    transition: 1s; 
    transform: scale(1.1); 
}
`


export default class Physics extends Component {

    render() {
        return (
        <Square><Link to='/physics'>Physics</Link></Square>
        ) ; 
    }
}