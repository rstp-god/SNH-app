import React, {Component} from 'react'; 
import styled from 'styled-components'; 
import { Link}  from 'react-router-dom';

const Item=styled.div`
    width: 20%; 
    height : 10%; 
    padding : 1em; 
    margin: 0 auto; 
    border-radius : 0 45px 45px 0; 
    border : 1px solid black; 
    letter-spacing: 3px; 
    &::after {
        margin-left: 65%; 
        content : url(https://img.icons8.com/android/24/000000/long-arrow-right.png);
    }
    &:hover{ 
        transform: translate(20px); 
    }
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
            </Link>
    }

}