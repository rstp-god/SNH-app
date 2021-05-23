const formulaLoaded = (newFormula,args,id,block) => { 
    return {
        type: 'FORMULA_LOADED',
        payload : {
            formula : newFormula, 
            block, 
            args, 
            id
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


export default { 
    formulaLoaded,
    formulaListLoaded,
    answerLoaded,
    loading
}