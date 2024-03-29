import React, {FC} from 'react';
import {Squares} from "../../types/common.types";
import {LinkContainer, ReactRouterLink, SquareContainer} from "../StyledComponents/StyledComponents.module";


const MainSquaresTemplate: FC<Squares> = (props: Squares) => {
    return (
        <SquareContainer>
           <LinkContainer>
               <ReactRouterLink to={props.toUrl}>{props.title}</ReactRouterLink>
           </LinkContainer>
        </SquareContainer>
    );
};

export default MainSquaresTemplate;
