import * as actionTypes from './actionTypes';

const initialState = {
    list: [],
    listDefault: [],
    error: false
}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_LIST:
            return {
                ...state,
                listDefault: action.list,
                error: false
            }

        case actionTypes.FETCH_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}


export default reducer;

