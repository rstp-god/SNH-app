import React from 'react';
import {
	DivFlexBoxColumn,
	SquareContainerNoAnimation
} from "../StyledComponents/StyledComponents.module";
import MathJaxFormulaDisplay from "./modules/MathJaxFormula/MathJaxFormula";
import CalculationFormula from "./modules/CalculationBlock/CalculationFormula";
import MathFuncMap from "../../calculations/math.func";
import { FormulaObj } from "../../types/common.types";
import DecardPlot from "./modules/DecardPlot/DecardPlot";
import Description from "./modules/Description/Description";
import VideoBlock from "./modules/VideoBlock/VideoBlock";


const InspectFormula = () => {
	const LaTeXFormula = "$$\\frac{\\int_{-\\infty}^{+\\infty}ydx}{\\sum \\alpha \\beta +\\int x^2dx}$$";
	const text = "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.\n" +
		"По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
	const formula: FormulaObj = MathFuncMap.get('Plus')!;
	return (
		<DivFlexBoxColumn>
			<SquareContainerNoAnimation>
				<MathJaxFormulaDisplay formula={LaTeXFormula}/>
			</SquareContainerNoAnimation>
			<SquareContainerNoAnimation>
				<CalculationFormula id={formula.id} func={formula.func} args={formula.args}/>
			</SquareContainerNoAnimation>
			<SquareContainerNoAnimation>
				<DecardPlot function="x^2+x"/>
			</SquareContainerNoAnimation>
			<SquareContainerNoAnimation>
				<Description text={text}/>
			</SquareContainerNoAnimation>
			<SquareContainerNoAnimation>
				<VideoBlock url="https://www.youtube.com/embed/6bAKIgu1kqE"/>
			</SquareContainerNoAnimation>
		</DivFlexBoxColumn>
	);
};

export default InspectFormula;