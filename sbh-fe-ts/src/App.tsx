import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import {Wrapper} from "./components/styledComponents/styledComponents";

function App() {
  return (
    <BrowserRouter>
        <Wrapper>
            <Header/>
        </Wrapper>
    </BrowserRouter>
  );
}

export default App;
