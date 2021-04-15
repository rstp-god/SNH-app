import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components'

import ItemList from '../ItemList/ItemList'; 
import Inspect from '../Formula Inspect/Inspect';


const Container = styled.div`
    font-family: 'Rubik', sans-serif;
    display : flex; 
    flex-direction : column ; 
    width : 100% ; 
    box-sizing : border-box; 
    border : 1px solid black; 
`


export default class List extends Component {   

    render () {
        return <Router>
        <Container>
            <Route path='/inspect' component={Inspect}/> 
            <ItemList title='Formula 1'/>
            <ItemList title='Formula 2'/>
            <ItemList title='Formula 3'/>
        </Container> 
        </Router>
    }
}