import React, {FC} from 'react';
import {DivFlexBoxColumn, MainContainer} from "../styledComponents/styledComponents";
import MainSquaresTemplate from "../mainSquaresTemplate/mainSquaresTemplate";
import {SquaresTitles} from "../../enums/common.enum";
import {CategoryRoutesEnum} from "../../enums/routes.enum";

const MainPage: FC = () => {

    const SquaresArray: React.ReactChild[] = [];
    Object.keys(SquaresTitles).forEach((key)=>{
        // @ts-ignore
        SquaresArray.push(<MainSquaresTemplate title={SquaresTitles[key]} toUrl={CategoryRoutesEnum[key]}/>);
    })

    return (
        <MainContainer>
            <DivFlexBoxColumn>
                {SquaresArray.reverse()}
            </DivFlexBoxColumn>
        </MainContainer>
    );
};

export default MainPage;
