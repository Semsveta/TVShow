import * as actionTypes from './actionTypes';


export const setList = (list) => {
    return {
        type: actionTypes.GET_LIST,
        list: list
    }
}

export const fetchListFailed = () => {
    return {
        type: actionTypes.FETCH_FAILED
    }
}

export const initialListFromAPI = () => {
    return dispatch => {
        fetch('https://api.tvmaze.com/shows')
            .then(response => response.json())
            .then(data => {
                dispatch(setList(data))
            }).catch(error => {
                dispatch(fetchListFailed())
            });
    }
}
