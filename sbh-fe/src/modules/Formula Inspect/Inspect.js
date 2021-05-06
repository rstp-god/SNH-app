import React, { Component } from "react"; 
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import MathJax from 'mathjax3-react';
import functionPlot from "function-plot";


const Container = styled.div`
    display : flex; 
    flex-direction : column; 
    width : 100% ; 
    box-sizing : border-box; 
    max-width: 1200px;
    margin: 0 auto; 
    h1 {
        font-weight: normal; 
        letter-spacing: 3px; 
    }
`

const NavContainer=styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 0 auto; 
    border: 2px solid black;
    border-radius: 45px;    
`
const FormulaContainer= styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 2% auto; 
    border: 2px solid black;
    border-radius: 45px; 
`

const CalculatorContaner= styled.div`
    display: flex; 
    width: 100%; 
    padding: 10px; 
    box-sizing: border-box; 
    margin: 2% auto; 
    border: 2px solid black;
    border-radius: 45px; 
    @media(max-width: 320px) {
        flex-direction: column; 
    }
`

const Answer= styled.div`
    width: 50%; 
    display : flex; 
    align-items: center; 
    align-content: center; 
    flex-direction : column; 
    margin: 0 auto; 
    box-sizing: border-box; 
`

const InputContainer=styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    height: 250px; 
    width: 50%; 
    margin: 0 auto; 
`

const InputCalc =styled.input`
    width: 100%; 
    box-sizing: border-box; 
    margin: 1% auto; 
`

const Description=styled.div`
    width: 100%; 
    font-size:15px;
    box-sizing: border-box; 
    padding: 10px;
    margin: 2% auto; 
    border: 2px solid black;
    border-radius: 45px; 
`

const VideoContainer= styled.div`
    width: 100%; 
    display : flex; 
    flex-direction: column; 
    align-content: center; 
    box-sizing: border-box; 
    margin: 2% auto; 
    padding: 15px;
    border: 2px solid black;
    border-radius: 45px; 
`

const GraphicsContainer= styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 2% auto; 
    padding: 10px;
    border: 2px solid black;
    border-radius: 45px; 
`

const Calc= styled.button`
    width: 100%;  
    box-sizing: border-box; 
    border: 2px solid black; 
    border-radius: 40px; 
    margin-top: 2%; 
    background-color: transparent;
    &:hover { 
        background: #929292;
        box-shadow: 0 15px 20px #929292;
        color: white;
        transform: translateY(-7px);
    }
`

const Video =styled.iframe`
    width: 99%; 
    box-sizing: border-box;
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

const Graph = styled.div`
    width: 100%; 
    box-sizing: border-box; 
    margin: 0 auto; 
`

const LaTeXFormula = "$$\\frac{\\int_{-\\infty}^{+\\infty}ydx}{\\sum \\alpha \\beta +\\int x^2dx}$$"; 
const VideoUrl = "https://www.youtube.com/embed/u_pnia4Xhlw";


function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return <span>Path : {location.pathname}</span>
  }

  
export default class Inspect extends Component {

    constructor(props){
        super(props); 
        this.GraphWidth = React.createRef();    
    }


    componentDidMount() {
        functionPlot({
            target: "#rootgraph",
            width: this.GraphWidth.current.offsetWidth-15,
            height: this.GraphWidth.current.offsetWidth*0.5, 
            yAxis: { domain: [-20, 20] },
            grid: true,
            data: [
              {
                fn: "x^3",
                derivative: {
                  fn: "2 * x",
                  updateOnMouseMove: true
                }
              }
            ]
          });
    }

    render() {
        return ( 
        <Container> 
             <NavContainer>
                 <Link to='/'>Back</Link>
                 <HeaderView/>
             </NavContainer>
             <FormulaContainer>
                 <MathJax.Provider  
                    options={{
                    svg: {
                    fontCache: 'global'
                    }
                }}
                >
                    <MathJax.Formula formula={LaTeXFormula}/> 
                 </MathJax.Provider>
             </FormulaContainer>
             <CalculatorContaner>
                <InputContainer>
                <h1>Calculate!</h1>
                <InputCalc placeholder='I'/>
                <InputCalc placeholder='U'/>
                <InputCalc placeholder='R'/>
                <Calc>Calc!</Calc>
                </InputContainer>
                <Answer>
                    <h1>Answer!</h1>
                    <h1>42</h1>
                </Answer>
             </CalculatorContaner>
             <GraphicsContainer>
                 <h1>Check this on decard plot!</h1>
                 <Graph ref={this.GraphWidth} id='rootgraph'/>
             </GraphicsContainer>
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