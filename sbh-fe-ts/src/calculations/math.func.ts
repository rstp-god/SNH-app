import { FormulaObj } from "../types/common.types";

const MathFuncMap = new Map<string, FormulaObj>();

function plus(a: number, b:number): number {
	return a+b
}

MathFuncMap.set('Plus', {
	id: 1,
	args: 2,
	func: plus
})

export default MathFuncMap;