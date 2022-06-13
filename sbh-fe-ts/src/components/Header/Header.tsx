import React, {FC} from 'react';
import Logo from "../../assets/pictures/logo.svg";
import {DivFlexBoxRow, HeaderButton, HeaderLogo, HeaderMainContainer, ReactRouterLinkSVG } from '../StyledComponents/StyledComponents.module';
import { SquaresTitles } from "../../enums/common.enum";

const Header: FC = () => {
    return (
        <>
            <HeaderMainContainer>
                <DivFlexBoxRow>
                    <ReactRouterLinkSVG to='/'><HeaderLogo src={Logo}/></ReactRouterLinkSVG>
                    <HeaderButton onClick={() => {console.log(1)}}>{SquaresTitles.MATH}</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>{SquaresTitles.PHYSICS}</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>{SquaresTitles.GEOMETRY}</HeaderButton>
                    <HeaderButton onClick={() => {console.log(1)}}>{SquaresTitles.INFORMATICS}</HeaderButton>
                </DivFlexBoxRow>
            </HeaderMainContainer>
        </>
    );
};

export default Header;
