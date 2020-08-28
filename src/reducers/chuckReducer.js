import {FETCH_CHUCKY_START, FETCH_CHUCKY_SUCCESS, FETCH_CHUCKY_FAILURE} from "../actions/chuckActions";


export const initialState = {
    loading: false,
    errors: "",
    chuck: ""
};

const chuckReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHUCKY_START:
            return{
                ...state, 
                loading: true
            };
        case FETCH_CHUCKY_SUCCESS:
            return{
                ...state, 
                chuck: action.payload,
                loading: false,
                error: ""
            };
        case FETCH_CHUCKY_FAILURE:
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    };
};

export default chuckReducer;