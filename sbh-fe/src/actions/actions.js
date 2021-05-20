const formulaLoaded = (newFormula,args) => { 
    return {
        type: 'FORMULA_LOADED',
        payload : {
            formula : newFormula, 
            args
        }
    }
}

const formulaListLoaded = (List, block) => {
    return {
        type: 'FORMULA_LIST_LOADED',
        payload : {
            List, 
            block
        }
    }
}

const answerLoaded = (answer) =>{
    return {
        type: 'ANSWER_LOADED', 
        payload : answer
    }
}

