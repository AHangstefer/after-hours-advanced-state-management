import React, {useContext} from "react";
import {useSelector} from "react-redux";
import chuckContext from "../contexts/chuckContext";

const ChuckIsAGod = () => {
    //const {loading, chuck }= useSelector(state => state)
 //using context   
    const {chuck, loading} = useContext(chuckContext)

    return(
        <h1>
            {loading ? 'loading joke...' : chuck}
        </h1>

    );
};

export default ChuckIsAGod;


//using context 
//imported useContext, and chuckContext
// created const {chuck (joke before), loading} = useContext()


// getting all the loading, chuck, and errors from state