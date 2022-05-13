import React, {
	FC,
	useEffect
} from 'react';
import {
	DivFlexBoxColumn,
	MainContainer
} from "../StyledComponents/StyledComponents.module";
import MainSquaresTemplate from "../MainSquaresTemplate/MainSquaresTemplate";
import { CATEGORY_ROUTES_MAP } from "../../maps/commonMaps.maps";
import ApiService from "../../services/api.service";

const MainPage: FC = () => {

	const service = new ApiService();

	useEffect(()=> {
		service.getMathFormula('1');
	})

	const SquaresArray: React.ReactChild[] = [];
	CATEGORY_ROUTES_MAP.forEach((value, key) => {
		SquaresArray.push(<MainSquaresTemplate title={key} toUrl={value}/>);
	})

	return (
		<MainContainer>
			<DivFlexBoxColumn>
				{SquaresArray}
			</DivFlexBoxColumn>
		</MainContainer>
	);
};

export default MainPage;
