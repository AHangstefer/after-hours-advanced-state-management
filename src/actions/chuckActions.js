import axios from "axios";


export const FETCH_CHUCKY_SUCCESS = "FETCH_CHUCKY_SUCCESS";
export const FETCH_CHUCKY_START = "FETCH_CHUCKY_START";
export const FETCH_CHUCKY_FAILURE = "FETCH_CHUCKY_FAILURE";

export const fetchChuckJoke = () => dispatch => {
    dispatch({type: FETCH_CHUCKY_START});
    axios
    .get(`https://api.chucknorris.io/jokes/random`)
    .then((res)=>{
        console.log("You're getting the data!", res.data);
        dispatch({type: FETCH_CHUCKY_SUCCESS, payload: res.data.value});

    })
    .catch((err)=>{
        // console.log("oh shit! You've got an err", err);
        dispatch({type: FETCH_CHUCKY_FAILURE, payload: err.message});
    })
};

// http://api.icndb/jokes/random