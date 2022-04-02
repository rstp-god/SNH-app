export interface FormulaObj{
    id: number,
    args: number,
    func: Function
}

export interface Formula {
    id:number,
    formulaName: string,
    videourl: string,
    description: string,
    LaTeXformula: string,
    PlotFormula: string,
    section: string,
}

export interface State {
    id: string;
    formula?: Formula;
    formulas?: Formula[];
    loading: boolean;
    args: number[];
    answer:number;
}

export interface Squares {
    title: string;
    toUrl: string;
}

export interface MathJaxFormula {
    formula: string; 
}
export interface PlotFormula {
    function: string;
}

export interface FormulaDescription {
    text: string;
}

export interface FormulaVids {
    url: string;
}