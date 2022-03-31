import React from 'react';
import {
	DivFlexBoxColumn,
	SquareContainerNoAnimation
} from "../StyledComponents/StyledComponents.module";
import MathJaxFormulaDisplay from "./modules/MathJaxFormula/MathJaxFormula";
import CalculationFormula from "./modules/CalculationBlock/CalculationFormula";
import MathFuncMap from "../../calculations/math.func";
import { FormulaObj } from "../../types/common.types";


const InspectFormula = () => {
	const LaTeXFormula = "$$\\frac{\\int_{-\\infty}^{+\\infty}ydx}{\\sum \\alpha \\beta +\\int x^2dx}$$";
	const formula: FormulaObj = MathFuncMap.get('Plus')!;
	return (
		<DivFlexBoxColumn>
			<SquareContainerNoAnimation>
				<MathJaxFormulaDisplay formula={LaTeXFormula}/>
			</SquareContainerNoAnimation>
			<SquareContainerNoAnimation>
				<CalculationFormula id={formula.id} func={formula.func} args={formula.args}/>
			</SquareContainerNoAnimation>
		</DivFlexBoxColumn>

	);
};

export default InspectFormula;