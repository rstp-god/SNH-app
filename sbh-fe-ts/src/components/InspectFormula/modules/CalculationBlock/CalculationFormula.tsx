import React, { FC } from 'react';
import {
	DivFlexBoxColumn,
	DivFlexBoxRow,
	DivFlexBoxRowCenterContent
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import { FormulaObj } from "../../../../types/common.types";

const CalculationFormula: FC<FormulaObj> = (props: FormulaObj) => {
	const inputsArray = generateInputs(props.args);
	return (
		<DivFlexBoxRow>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					{Dictionary.CALCULATE}
					{inputsArray}
				</DivFlexBoxRowCenterContent>
			</DivFlexBoxColumn>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					{Dictionary.ANSWER}
				</DivFlexBoxRowCenterContent>
			</DivFlexBoxColumn>
		</DivFlexBoxRow>
	);
};


function generateInputs(count: number): React.ReactChild[] {
	return (new Array(count).map(() => {
		return <input/>
	}))
}

export default CalculationFormula;