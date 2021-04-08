import React from 'react'
//import ReactDOM from 'react-dom'
import styled from "styled-components"
import "materialize-css"

const he = styled.div `
  wight: 100%;
  height: 50px;
  color-backgraund: red;
`;

function App(){
  return( 
    <div>
      <he> Hello World! </he>
    </div>
    )
}

export default App;
