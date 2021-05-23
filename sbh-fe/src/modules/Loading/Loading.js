import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    width : 20px; 
    height : 20px; 
`


export default class Loading { 
    render () { 
        return (
            <Container/>
        )
    }
}