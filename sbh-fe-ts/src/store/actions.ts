import { createAction } from "@reduxjs/toolkit";
import {
	Formula,
	FormulaObj
} from "../types/common.types";
import { ActionPayload } from "../types/action.types";


const loadingStart = createAction('LOADING_START');
const loadingEnd = createAction('LOADING_END');

const formulaLoaded = createAction('FORMULA_LOADED', (formula: Formula): ActionPayload<Formula> => {
	return {
		payload: {
			...formula
		}
	}
});

const formulaObjLoaded = createAction('FORMULA_OBJ_LOADED', (obj: FormulaObj): ActionPayload<FormulaObj> => {
	return {
		payload: {
			...obj
		}
	}
});

const formulaListLoaded = createAction('FORMULA_LIST_LOADED', (formulas: Formula[]): ActionPayload<Formula[]> => {
	return {
		payload: [...formulas]
	}
})

const answerLoaded = createAction('ANSWER_LOADED', (answer: number): ActionPayload<number> => {
	return {
		payload: answer
	}
});

const choisedCategory = createAction('CHOISE_CATEGORY', (category: string): ActionPayload<string> => {
	return {
		payload: category
	}
})

const emptyAction = createAction('EMPTY');

export {
	loadingStart,
	loadingEnd,
	formulaLoaded,
	formulaObjLoaded,
	formulaListLoaded,
	answerLoaded,
	choisedCategory,
	emptyAction
}