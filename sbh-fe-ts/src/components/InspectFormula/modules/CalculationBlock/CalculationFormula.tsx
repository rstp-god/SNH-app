import React, {
	ChangeEvent,
	ChangeEventHandler,
	FC,
	SyntheticEvent,
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
import { current } from "@reduxjs/toolkit";

const CalculationFormula: FC<FormulaObj> = (props: FormulaObj) => {
	const [displayAnswer, setAnswer] = useState<Answer>({ displayAnswer: 0 });
	const [flag, setFlag] = useState<Flag>({ flag: false });
	const [values, setValues] = useState<number[]>(new Array(props.args))
	const answer = () => {
		setAnswer({ displayAnswer: props.func(...values) })
		setFlag({ flag: true })
	}
	const inputChange = (event: SyntheticEvent<HTMLInputElement>) => {
		values[+event.currentTarget.name] = +event.currentTarget.value;
		setValues(values);
	}
	const inputs = generateInputs(props.args, inputChange);
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


function generateInputs(count: number, changeFunc: ChangeEventHandler<HTMLInputElement>): React.ReactChild[] {
	const inputs: Array<React.ReactChild> = [];
	for (let i = 0; i < count; i++) {
		inputs.push(<InputNumberForCalculation key={i} name={'' + i} type='text'
		                                       placeholder={Dictionary.INPUT_PLACEHOLDER} onChange={changeFunc}/>)
	}
	return inputs
}

export default CalculationFormula;