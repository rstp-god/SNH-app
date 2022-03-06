import React, {FC} from 'react';
import Logo from "../../assets/pictures/logo.svg";
import {DivFlexBoxRow, HeaderButton, HeaderLogo, HeaderMainContainer, ReactRouterLinkSVG } from '../StyledComponents/StyledComponents.module';

const Header: FC = () => {
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
