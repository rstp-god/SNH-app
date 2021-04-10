import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width : 100% ; 
    box-sizing : border-box; 
    border : 1px solid black; 
`


export default class List extends Component {   

    render () {
        return <Container> Hello World </Container>
    }
}