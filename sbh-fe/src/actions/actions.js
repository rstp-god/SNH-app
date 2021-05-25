const formulaLoaded = (newFormula,args,id) => { 
    return {
        type: 'FORMULA_LOADED',
        payload : {
            formula : newFormula,
            args : args,
            id : id
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


const loading = () => { 
    return { 
        type: 'LOADING'
    }
}

const pullValue = (value, key) => {
    return {
        type: 'INPUT_VALUE',
        payload : {
            value, 
            key
        }
    }
}


export {
    formulaLoaded,
    formulaListLoaded,
    answerLoaded,
    loading,
    pullValue
}