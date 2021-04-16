import React, { Component } from "react"; 
import {Link} from 'react-router-dom';



export default class Inspect extends Component {



    render() {
        return <> 
        <Link to='/list'>Back </Link>
        boom {console.log(this.state.title)}
        </>
    }
}