import {State} from "../../types/common.types";

const InitialState: State ={
    id: '',
    loading: false,
    args:[],
    answer: 0,
}

// export const reducer = (state = InitialState, action): State => {
//     switch(action.type) {
//         case 'FORMULA_LOADED':{
//             return {
//                 ...state,
//                 formula: action.payload.formula,
//                 args : action.payload.args,
//                 loading : false,
//             }
//         }
//         default: {
//             return {
//                 ...state
//             }
//         }
//     }
// }

