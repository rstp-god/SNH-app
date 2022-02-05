import React from 'react';
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import {Wrapper} from "./components/styledComponents/styledComponents";
import MainPage from "./components/mainPage/mainPage";

function App() {
  return (
    <BrowserRouter>
        <Wrapper>
            <Header/>
            <MainPage/>
        </Wrapper>
    </BrowserRouter>
  );
}

export default App;
