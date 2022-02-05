import React, {FC} from 'react';
import {
    HeaderMainContainer,
    DivFlexBoxRow,
    HeaderButton,
    HeaderLogo,
    ReactRouterLinkSVG
} from '../styledComponents/styledComponents'
import Logo from "../../assets/pictures/logo.svg";
import {Link} from "react-router-dom";

const Header: FC= () => {
    return (
        <>
            <HeaderMainContainer>
                <DivFlexBoxRow>
                    <ReactRouterLinkSVG to='/'><HeaderLogo src={Logo}/></ReactRouterLinkSVG>
                    <HeaderButton onClick={() => {console.log(1)}}>Алгебра</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>Физика</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>Геометрия</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>ИНформатика</HeaderButton>
                </DivFlexBoxRow>
            </HeaderMainContainer>
        </>
    );
};

export default Header;
