import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const Square = styled.div`
box-sizing : border-box; 
width : 30%;
height : 100%;
border : 1px solid black;
`


export default class Physics extends Component {

    render() {
        return (
        <Square><Link to='/'>Physics</Link></Square>
        ) ; 
    }
}