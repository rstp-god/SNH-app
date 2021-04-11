import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width : 100% ; 
    box-sizing : border-box; 
    border : 1px solid black; 
`


export default class List extends Component {   

    constructor(props) {
        super(props);
    }

    render () {
        return <Container> {this.props.title} </Container>
    }
}