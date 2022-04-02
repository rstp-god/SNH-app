import React, { FC } from 'react';
import {
	DivFlexBoxColumn,
	DivFlexBoxColumnCenterContent,
	DivFlexBoxRow,
	DivFlexBoxRowCenterContent,
	InputNumberForCalculation
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import { FormulaObj } from "../../../../types/common.types";

const CalculationFormula: FC<FormulaObj> = (props: FormulaObj) => {
	return (
		<DivFlexBoxRow>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					{Dictionary.CALCULATE}
				</DivFlexBoxRowCenterContent>
				<DivFlexBoxColumnCenterContent>
					{generateInputs(props.args)}
				</DivFlexBoxColumnCenterContent>
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
	const inputs: Array<React.ReactChild> = [];
	for (let i = 0; i < count; i++) {
		inputs.push(<>
			<InputNumberForCalculation key={i} type='text' placeholder={Dictionary.INPUT_PLACEHOLDER}/>
		</>)
	}
	return inputs
}

export default CalculationFormula;