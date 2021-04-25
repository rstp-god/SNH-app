import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import ItemList from '../ItemList/ItemList'; 

const Container = styled.div`
    display : flex; 
    flex-direction : column ; 
    width : 100% ; 
    box-sizing : border-box; 
`

const ListStyled = styled.ul`
    list-style: none; 
    padding: 0 ; 
`


export default class List extends Component {   

    render () {
        if (this.props.block === 'informatic') {
            return (
                <Container>
                <ListStyled>
                <ItemList title='Informatic Formula 1'/>
                <ItemList title='Informatic Formula 2'/>
                <ItemList title='Informatic Formula 3'/>
                <Link to='/'>Back</Link>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'math') {
            return (
                <Container>
                <ListStyled>
                <ItemList title='Math Formula 1'/>
                <ItemList title='Math Formula 2'/>
                <ItemList title='Math Formula 3'/>
                <Link to='/'>Back</Link>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'physics') {
            return (
                <Container>
                <ListStyled>
                <ItemList title='Physics Formula 1'/>
                <ItemList title='Physics Formula 2'/>
                <ItemList title='Physics Formula 3'/>
                <Link to='/'>Back</Link>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'geom') {
            return (
                <Container>
                <ListStyled>
                <ItemList title='Geometry Formula 1'/>
                <ItemList title='Geometry Formula 2'/>
                <ItemList title='Geometry Formula 3'/>
                <Link to='/'>Back</Link>
                </ListStyled>
                </Container>
            )
        }
    }
}