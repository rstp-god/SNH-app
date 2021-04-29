import React, { Component } from "react"; 
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MathJax from 'mathjax3-react';

const Container = styled.div`
    display : flex; 
    flex-direction : column; 
    width : 100% ; 
    box-sizing : border-box; 
    max-width: 1200px;
    margin: 0 auto; 
`

const NavContainer=styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 0 auto; 
    border: 1px solid black;    
`
const FormulaContainer= styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 2% auto; 
    border: 1px solid black; 
`

const CalculatorContaner= styled.div`
    display: flex; 
    width: 100%; 
    padding: 10px; 
    box-sizing: border-box; 
    margin: 2% auto; 
    border: 1px solid black; 
`

const Answer= styled.div`
    width: 50%; 
    display : flex; 
    align-items: center; 
    flex-direction : column; 
    margin: 0 auto; 
    box-sizing: border-box; 
`

const InputContainer=styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    width: 50%; 
`

const InputCalc =styled.input`
    width: 100%; 
    box-sizing: border-box; 
    margin: 0 auto; 
`

const Description=styled.div`
    width: 100%; 
    font-size:15px;
    box-sizing: border-box; 
    padding: 10px;
    margin: 2% auto; 
    border: 1px solid black;
`

const VideoContainer= styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 2% auto; 
    padding: 10px;
    border: 1px solid black;
`

const Video =styled.iframe`
    width: 100%; 
    margin: 0 auto; 
    height: 600px;

@media (max-width: 1200px) {
    height: 500px;
}

@media (max-width: 500px) {
    height: 350px;
}
@media (max-width: 350px) {
    height: 280px;
}
`

const LaTeXFormula = "$$\\frac{\\int_{-\\infty}^{+\\infty}ydx}{\\sum \\alpha \\beta +\\int x^2dx}$$"; 
const VideoUrl = "https://www.youtube.com/embed/u_pnia4Xhlw";


export default class Inspect extends Component {

    constructor(props){
        super(props); 
        
    }

    render() {
        return ( 
        <Container> 
             <NavContainer>
                 <Link to='/'>Back</Link>
             </NavContainer>
             <FormulaContainer>
                 <MathJax.Provider>
                    <MathJax.Formula formula={LaTeXFormula}/> 
                 </MathJax.Provider>
             </FormulaContainer>
             <CalculatorContaner>
                <InputContainer>
                <h1>Calculate!</h1>
                <InputCalc/>
                <InputCalc/>
                <InputCalc/>
                </InputContainer>
                <Answer>
                    <h1>Answer!</h1>
                    <h1>42</h1>
                </Answer>
             </CalculatorContaner>
             <Description>
                    <h1>Description</h1>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas nibh at odio aliquet tincidunt. Curabitur at dui augue. Fusce scelerisque eu ipsum at mollis. Nullam in erat felis. Sed lobortis nibh neque, eu luctus sapien tristique tristique. Morbi vitae vehicula dui, id sagittis dolor. Aenean accumsan dictum nulla at consequat. Aenean malesuada tortor ligula, at pulvinar nunc laoreet eu. Nunc auctor, dolor eget iaculis facilisis, purus lectus molestie quam, in bibendum nisi velit at nisi.
             <br/>  
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan metus in mollis euismod. Nunc finibus tincidunt odio, et porta dolor dapibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vitae ante ultrices, placerat purus id, lacinia nulla. Morbi mattis ex non scelerisque pulvinar. In hac habitasse platea dictumst. Nullam sagittis elit ligula, nec suscipit odio sagittis et.
             </Description>
             <VideoContainer> 
                <h1>Checkout this!</h1>
                <Video src={VideoUrl}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
             </VideoContainer>
        </Container>
        ) 
    }
}