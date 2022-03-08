import React from 'react';
import {
	DivFlexBoxColumn,
	SquareContainerNoAnimation
} from "../StyledComponents/StyledComponents.module";
import MathJaxFormulaDisplay from "./modules/MathJaxFormula/MathJaxFormula";


const InspectFormula = () => {
	const LaTeXFormula = "$$\\frac{\\int_{-\\infty}^{+\\infty}ydx}{\\sum \\alpha \\beta +\\int x^2dx}$$";
	return (
		<DivFlexBoxColumn>
			<SquareContainerNoAnimation>
				<MathJaxFormulaDisplay formula={LaTeXFormula}/>
			</SquareContainerNoAnimation>
		</DivFlexBoxColumn>

	);
};

export default InspectFormula;