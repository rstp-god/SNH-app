import React, {
	FC,
	useState
} from 'react';
import {
	AnswerText,
	CalculateButton,
	DivFlexBoxColumn,
	DivFlexBoxColumnCenterContent,
	DivFlexBoxRow,
	DivFlexBoxRowCenterContent,
	HeaderText,
	InputNumberForCalculation,
	UnitsText,
} from "../../../StyledComponents/StyledComponents.module";
import { Dictionary } from "../../../../enums/common.enum";
import {
	Answer,
	Flag,
	FormulaObj
} from "../../../../types/common.types";

const CalculationFormula: FC<FormulaObj> = (props: FormulaObj) => {
	const inputs = generateInputs(props.args);
	const [displayAnswer, setAnswer] = useState<Answer>({displayAnswer: 0});
	const [flag, setFlag] = useState<Flag>({flag: false});
	const answer = () => {
		setAnswer({displayAnswer: 5})
		setFlag({flag: true});
	}

	return (
		<DivFlexBoxRow>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					<HeaderText>{Dictionary.CALCULATE}</HeaderText>
				</DivFlexBoxRowCenterContent>
				<DivFlexBoxColumnCenterContent>
					{inputs}
				</DivFlexBoxColumnCenterContent>
				<CalculateButton onClick={answer}>{Dictionary.GET_ANSWER}</CalculateButton>
			</DivFlexBoxColumn>
			<DivFlexBoxColumn>
				<DivFlexBoxRowCenterContent>
					<HeaderText>{Dictionary.ANSWER}</HeaderText>
				</DivFlexBoxRowCenterContent>
				<DivFlexBoxRowCenterContent>
					<AnswerText>{flag.flag ? displayAnswer.displayAnswer : ''}</AnswerText>
				</DivFlexBoxRowCenterContent>
				<DivFlexBoxRowCenterContent>
					{<UnitsText>{flag.flag ? Dictionary.UNITS : Dictionary.INPUT_VALUES}</UnitsText>}
				</DivFlexBoxRowCenterContent>
			</DivFlexBoxColumn>
		</DivFlexBoxRow>
	);
};


function generateInputs(count: number): React.ReactChild[] {
	const inputs: Array<React.ReactChild> = [];
	for (let i = 0; i < count; i++) {
		inputs.push(<InputNumberForCalculation key={i} type='text' placeholder={Dictionary.INPUT_PLACEHOLDER}/>)
	}
	return inputs
}

export default CalculationFormula;