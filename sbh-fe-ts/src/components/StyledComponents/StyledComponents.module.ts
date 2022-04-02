import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Wrapper = styled.div`
  font-family: 'Playfair Display SC', serif!important;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const DivFlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`

export const DivFlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-around;
`

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 60px;
`

export const HeaderButton = styled.button`
  padding: .75rem 1.25rem;
  border-radius: 10rem;
  color: black;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10rem;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #FFC0CB;
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
  }

  &:hover {
    color: white;

    &:before {
      width: 100%;
    }
  }
`

export const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
`

export const UlInside = styled.ul`
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px;
  margin-top: 4% !important;
  padding: 1em;
  text-decoration: none;
  border-radius: 5px;
  border-left: 10px solid black;
  -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  transition: 0.3s all linear;
  letter-spacing: 3px;
  position: relative;

  &:hover {
    border-left: 10px solid transparent;
    border-right: 10px solid black;
  }
`

export const ReactRouterLink = styled(NavLink)`
  font-size: 50px;
  color: black;
  text-decoration: none;
  letter-spacing: 2px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
`

export const ReactRouterLinkSVG = styled(NavLink)`
  text-decoration: none;
`

export const UlReactRouterLink = styled(NavLink)`
  font-size: 30px;
  color: black;
  text-decoration: none;
  letter-spacing: 2px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
`

export const SearchLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const SearchLine = styled.input`
  box-sizing: border-box;
  width:100%;
  height: 35px;
  padding : 0 1em;
  border-radius : 45px;
  border: 1px solid black;
  outline:none;
  position: relative;
  ::-webkit-input-placeholder {
    font-family: Playfair Display SC, serif;
    letter-spacing: 2px;
    text-align: center;
    color: black;
  }
  :-moz-placeholder {
    color: black;
    letter-spacing: 2px;
    font-family: Playfair Display SC, serif;
    text-align: center;
  }
  ::-moz-placeholder {
    color: black;
    letter-spacing: 2px;
    font-family: Playfair Display SC, serif;
    text-align: center;
  }
  :-ms-input-placeholder {
    letter-spacing: 2px;
    color: black;
    font-family: Playfair Display SC, serif;
    text-align: center;
  }
`

export const HeaderMainContainer = styled.header`
  font-family: 'Playfair Display SC', serif!important;
  width: 100%;
  height: 100px;
`

export const MainContainer = styled.div`
  width: 100%;
  height: 1200px;
`

export const SquareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50px;
  -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  &:hover {
    transition: 1s;
    transform: scale(1.1);
  }
`

export const SquareContainerNoAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5%;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50px;
  -webkit-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  -moz-box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
  box-shadow: -4px 14px 24px -4px rgba(15, 15, 15, 0.719);
`

export const LinkContainer = styled.div`
  margin: 0 auto;
`

export const DivFlexBoxRowCenterContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`

export const DivFlexBoxColumnCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  box-sizing: border-box;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`

export const InputNumberForCalculation = styled.input`
  width: 100%;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 15px;
  ::-webkit-input-placeholder {
    letter-spacing: 1px;
    text-align: center;
    color: black;
  }
  :-moz-placeholder {
    color: black;
    letter-spacing: 1px;
    text-align: center;
  }
  ::-moz-placeholder {
    color: black;
    letter-spacing: 1px;
    text-align: center;
  }
  :-ms-input-placeholder {
    letter-spacing: 1px;
    color: black;
    text-align: center;
  }
`
