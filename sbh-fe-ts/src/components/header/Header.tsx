import React, {FC} from 'react';
import {HeaderMainContainer, DivFlexBoxRow, HeaderButton, HeaderLogo} from '../styledComponents/styledComponents'
import Logo from "../../assets/pictures/logo.svg";

const Header: FC= () => {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <>
            <HeaderMainContainer>
                <DivFlexBoxRow>
                    <HeaderLogo src={Logo}/>
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
