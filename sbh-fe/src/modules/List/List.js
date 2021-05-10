import React, {Component} from 'react'
import styled from 'styled-components'

import ItemList from '../ItemList/ItemList'; 

const Container = styled.div`
    display : flex; 
    flex-direction : column; 
    width : 100% ; 
    box-sizing : border-box; 
    margin: 0 auto; 
`

const ListStyled = styled.ul`
    list-style: none; 
    padding: 0 ; 
`

/* const LinkStyle = styled(Link)`
    width:10%;
    color: black;
    margin: 0 auto; 
    text-decoration: none; 
    padding : 0 1em;
    font-size: 18px; 
`*/

const SearchLine = styled.input`
    box-sizing: border-box; 
    width:100%;
    height: 35px; 
    padding : 0 1em;
    border-radius : 45px;
    border: 1px solid black; 
    outline:none;
    ::-webkit-input-placeholder {
    font-family: Playfair Display SC, serif;
    letter-spacing: 2px; 
    text-align: center;
    color: black; 
    }
    :-moz-placeholder {
        color: black; 
        letter-spacing: 2px; 
        font-family: Playfair Display SC, serif;
   text-align: center;
    }
    ::-moz-placeholder { 
    color: black; 
    letter-spacing: 2px; 
    font-family: Playfair Display SC, serif;
   text-align: center;
    }
    :-ms-input-placeholder {
    letter-spacing: 2px; 
    color: black; 
    font-family: Playfair Display SC, serif;
   text-align: center;
    }
`

const LinkContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-content: center; 
    align-items: center; 
    box-sizing: border-box; 
    max-width: 1200px;
    width: 100%; 
    margin: 0 auto; 
`



export default class List extends Component {   

    render () {
        if (this.props.block === 'informatic') {
            return (
                <Container>
                <LinkContainer>
                <SearchLine type='serach' placeholder='Search'/>
                </LinkContainer>
                <ListStyled>
                <ItemList block='informatics' title='Informatic Formula 1'/>
                <ItemList block='informatics' title='Informatic Formula 2'/>
                <ItemList block='informatics' title='Informatic Formula 3'/>
                </ListStyled>
                </Container>
            )   
        }
        if (this.props.block === 'math') {
            return (
                <Container>
                <LinkContainer>
                <SearchLine type='serach' placeholder='Search'/>
                </LinkContainer>
                <ListStyled>
                <ItemList block='math' title='Math Formula 1'/>
                <ItemList block='math' title='Math Formula 2'/>
                <ItemList block='math' title='Math Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'physics') {
            return (
                <Container>
                <LinkContainer>
                <SearchLine type='serach' placeholder='Search'/>
                </LinkContainer>
                <ListStyled>
                <ItemList block='physics'title='Physics Formula 1'/>
                <ItemList block='physics'title='Physics Formula 2'/>
                <ItemList block='physics'title='Physics Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
        if (this.props.block === 'geom') {
            return (
                <Container>
                <LinkContainer>
                <SearchLine type='serach' placeholder='Search'/>
                </LinkContainer>
                <ListStyled>
                <ItemList block='geom' title='Geometry Formula 2'/>
                <ItemList block='geom' title='Geometry Formula 1'/>
                <ItemList block='geom' title='Geometry Formula 3'/>
                </ListStyled>
                </Container>
            )
        }
    }
}