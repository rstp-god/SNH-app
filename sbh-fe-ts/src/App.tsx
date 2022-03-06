import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Wrapper} from "./components/StyledComponents/StyledComponents.module";
import MainPage from "./components/MainPage/MainPage";
import {
    CategoryRoutesEnum,
    InspectRoutesEnum
} from "./enums/routes.enum";
import ListFormulas from "./components/ListFormulas/ListFormulas";
import InspectFormula from "./components/InspectFormula/InspectFormula";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Wrapper>
                <Routes>
                    <Route path={CategoryRoutesEnum.HOME} element={<MainPage/>}/>
                    <Route path={CategoryRoutesEnum.MATH} element={<ListFormulas/>}/>
                    <Route path={InspectRoutesEnum.MATH} element={<InspectFormula/>}/>
                </Routes>
            </Wrapper>

        </BrowserRouter>
    );
}

export default App;
