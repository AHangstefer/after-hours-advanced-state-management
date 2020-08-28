import React from "react";
import {useSelector} from "react-redux";

const ChuckIsAGod = () => {
    const {loading, chuck }= useSelector(state => state)

    return(
        <h1>
            {loading ? 'loading joke...' : chuck}
        </h1>

    );
};

export default ChuckIsAGod;





// getting all the loading, chuck, and errors from state