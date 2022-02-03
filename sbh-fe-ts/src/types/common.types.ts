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
    PlotFormula: string
}

export interface State {
    id: string;
    formula?: Formula;
    formulas?: Formula[];
    loading: boolean;
    args: number[];
    answer:number;
}

