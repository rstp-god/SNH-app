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

const formulaListLoaded = (block) => {
    return {
        type: 'FORMULA_LIST_LOADED',
        payload : {
            block
        }
    }
}

const answerLoaded = (answer) =>{
    console.log(answer);
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

const blockChoised = (block)=>{
    return {
        type: 'BLOCK_CHOISED', 
        payload : block
    }
}


export {
    formulaLoaded,
    formulaListLoaded,
    answerLoaded,
    loading,
    pullValue,
    blockChoised
}