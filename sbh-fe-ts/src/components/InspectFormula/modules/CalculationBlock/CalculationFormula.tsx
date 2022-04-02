import React, { FC } from 'react';
import {
	DivFlexBoxColumn,
	DivFlexBoxRow,
	DivFlexBoxRowCenterContent,
	HeaderText
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import { FormulaObj } from "../../../../types/common.types";

const CalculationFormula: FC<FormulaObj> = (props: FormulaObj) => {
	const inputsArray = generateInputs(props.args);
	return (
		<DivFlexBoxRow>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					<HeaderText>{Dictionary.CALCULATE}</HeaderText>
					{inputsArray}
				</DivFlexBoxRowCenterContent>
			</DivFlexBoxColumn>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					<HeaderText>{Dictionary.ANSWER}</HeaderText>
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