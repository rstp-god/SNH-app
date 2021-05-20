import CookieService from './services/CookieService'; 

const cookie = new CookieService; 

let InitialState = { 
    formula : '', 
    formulas : [], 
    block: null, 
    id: null, 
    loading : true, 
    args: undefined,
    answer : null  
}

if (cookie.getCookiebyName('lastformula') !== undefined || 
    cookie.getCookiebyName('lastformula') !=='') {
    InitialState = { 
        ...InitialState,
        formula : cookie.getCookiebyName('lastformula'), 
    }
}

if (cookie.getCookiebyName('lastblock') !== undefined || 
cookie.getCookiebyName('lastblock') !=='') {
InitialState = { 
    ...InitialState,
    block: cookie.getCookiebyName('lastblock'),
}
}

const reducer = (state = InitialState, action) => { 
    switch(action) {
        case 'FORMULA_LOADED': {
             return {
                 ...state, 
                 formula : action.payload.formula,
                 args : action.payload.args, 
                 loading : false
             }
        }
        case 'FORMULA_LIST_LOADED' : {
            return {
                ...state, 
                formulas : action.payload.List, 
                block : action.payload.block,
                loading : false
            }
        }
        case 'ANSWER_LOADED' : { 
            return { 
                ...state, 
                answer : action.payload.answer, 
                loading: false
            }
        }
        case 'LOADING': {
            return { 
                ...state, 
                loading: true
            }
        }
    }
}


export default reducer; 