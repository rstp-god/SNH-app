import React, { FC } from 'react';
// @ts-ignore
import MathJax from 'mathjax3-react';
import { MathJaxFormula } from "../../../../types/common.types";

const MathJaxFormulaDisplay: FC<MathJaxFormula> = (props: MathJaxFormula) => {
	return (
		<>
			<MathJax.Provider
				options={{
					svg: {
						fontCache: 'global'
					}
				}}
			>
				<MathJax.Formula formula={props.formula}/>
			</MathJax.Provider>
		</>
	);
};

export default MathJaxFormulaDisplay;