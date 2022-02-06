import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Wrapper} from "./components/StyledComponents/StyledComponents";
import MainPage from "./components/MainPage/MainPage";
import {CategoryRoutesEnum} from "./enums/routes.enum";
import ListFormulas from "./components/ListFormulas/ListFormulas";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Wrapper>
                <Routes>
                    <Route path={CategoryRoutesEnum.HOME} element={<MainPage/>}/>
                    <Route path={CategoryRoutesEnum.MATH} element={<ListFormulas/>}/>
                </Routes>
            </Wrapper>

        </BrowserRouter>
    );
}

export default App;
