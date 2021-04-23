import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Square = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin-top: 5%;
box-sizing : border-box; 
width : 90%;
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


const LinkStyle = styled(Link)`
    font-size:70px; 
    color: black;
    text-decoration: none; 
`


export default class Math extends Component {

    render () {

        return (
            <Square><LinkStyle to='/math'>Math</LinkStyle></Square>
        )
    }
}