import CookieService from './services/CookieService'; 

const cookie = new CookieService();

let InitialState = {
    formula : '', 
    formulas : [], 
    block: null, 
    id: null, 
    loading : true, 
    args: undefined,
    answer : null,
    values : undefined
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
    switch(action.type) {
        case 'FORMULA_LOADED': {
             return {
                 ...state,
                 formula : action.payload.formula,
                 args : action.payload.args,
                 loading : false,
                 values : new Array(action.payload.args)
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
                answer : action.payload,
                loading: false
            }
        }
        case 'LOADING': {
            return { 
                ...state, 
                loading: true
            }
        }
        case 'INPUT_VALUE' : {
            return { 
                ...state, 
                values : [
                    ...state.values.slice(0,+action.payload.key),
                    action.payload.value,
                    ...state.values.slice(+action.payload.key + 1)
                ]
            }
        }
        default:
            return state;
    }
}


export default reducer; 