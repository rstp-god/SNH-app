import CookieService from './services/CookieService'; 

const cookie = new CookieService; 

let InitialState = { 
    formula : '', 
    formulas : [], 
    block: null, 
    loading : true, 
    args: undefined,
    answer : null  
}

if (cookie.getCookiebyName('lastformula') !== undefined || 
    cookie.getCookiebyName('lastformula') !=='') {
    InitialState = { 
        formula : cookie.getCookiebyName('lastformula'), 
        formulas : [], 
        block: null, 
        loading : true, 
        args: undefined,
        answer : null 
    }
}

if (cookie.getCookiebyName('lastblock') !== undefined || 
cookie.getCookiebyName('lastblock') !=='') {
InitialState = { 
    formula : InitialState.formula, 
    formulas : [], 
    block: cookie.getCookiebyName('lastblock'), 
    loading : true, 
    args: undefined,
    answer : null 
}
}

const reducer = (state = InitialState, action) => { 
    switch(action) {
        case 'INIT': 
        {
            return state = 'init'; 
        }
    }
}



export default reducer; 