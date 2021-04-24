import React, {Component} from 'react'; 
import styled from 'styled-components'; 
import { Link}  from 'react-router-dom';

const Item=styled.div`
    width: 100%; 
    height : 8%; 
    box-sizing: border-box;
    max-width:500px;
    margin-top: 10%!important;
    padding : 1em; 
    margin: 0 auto; 
    border-radius : 0 45px 45px 0; 
    border : 1px solid black; 
    letter-spacing: 3px; 
    -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
    &:hover{ 
        transform: translate(20px); 
    }
`

const Triangle= styled.button`
        border: 50px solid transparent;
        border-left: 50px solid #333;
        display: inline-block;
`

export default class ItemList extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return <Link to='/inspect'> 
            <Item>
            {this.props.title}
            </Item>
            <Triangle>

            </Triangle>
            </Link>
    }

}