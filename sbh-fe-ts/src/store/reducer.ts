import {
	ActionReducerMapBuilder,
	createReducer
} from "@reduxjs/toolkit";
import { State } from "../types/common.types";
import {
	answerLoaded,
	choisedCategory,
	formulaListLoaded,
	formulaLoaded,
	formulaObjLoaded,
	loadingEnd,
	loadingStart
} from "./actions";

const initialState : State = {
	isLoading: true,
}

export const mainReducer = createReducer(initialState, (builder: ActionReducerMapBuilder<State>) => {
	builder
		.addCase(formulaLoaded, (state, action) => {state.formula = action.payload})
		.addCase(formulaObjLoaded, (state, action) => {state.loadedFormula = action.payload})
		.addCase(formulaListLoaded, (state, action) => {state.formulas = action.payload})
		.addCase(answerLoaded, (state, action) =>{state.answer = action.payload})
		.addCase(loadingStart, (state) => {state.isLoading = true})
		.addCase(loadingEnd, (state)=> {state.isLoading = false})
		.addCase(choisedCategory, (state, action) => {})
		.addDefaultCase(()=>{})
})