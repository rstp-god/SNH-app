import React, {Component} from 'react'; 
import styled from 'styled-components'; 

const Item=styled.a`
    border : 1px solid black; 
    letter-spacing: 3px; 
`


export default class ItemList extends Component {

    constructor(props){
        super(props);
    }

    render () {
        return <Item href=''>{this.props.title}</Item>
    }

}