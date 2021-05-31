import React, {Component} from 'react'; 
import styled from 'styled-components'; 
import { Link }  from 'react-router-dom';

const Item=styled.ul`
    width: 100%; 
    height : 8%; 
    box-sizing: border-box;
    max-width:1200px;
    margin-top: 4%!important;
    margin: 0 auto; 
    padding: 1em; 
    text-decoration: none; 
    border-radius: 5px;
    border-left: 10px solid black; 
    -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    transition: 0.3s all linear;
    letter-spacing: 3px; 
    position: relative;
    &:hover{ 
        border-left: 10px solid transparent;
        border-right: 10px solid black;
    }
`

const LinkStyle = styled(Link)`
    width:10%;
    color: black;
    margin: 0 auto; 
    text-decoration: none; 
    padding : 0 1em;
`

class ItemList extends Component {
    
    render () {
        return (
            <Item key={this.props.id}>
            <LinkStyle to={`${this.props.block}/inspect/${this.props.id}`}>
            {this.props.title}
            </LinkStyle>
            </Item>
        )
    }
}



export default ItemList;