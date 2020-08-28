import React, {useEffect, useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchChuckJoke} from "./actions/chuckActions";
import ChuckIsAGod from "./components/ChuckIsAGod";
import chuckContext from "./contexts/chuckContext";
//using context >>
import axios from "axios"




function App() {

  //  const dispatch = useDispatch();
  //  const errors = useSelector(state => state.errors);

  //using context >>>>
  const [chuck, setChuck]= useState('');
  const [loading, setLoading]= useState(false);
  const [errors, setErrors]= useState('');

  const getJoke = () =>{
    setLoading(true);
    axios
    .get(`https://api.chucknorris.io/jokes/random`)
    .then((res)=>{
        console.log("You're getting the data!", res.data);
        //dispatch({type: FETCH_CHUCKY_SUCCESS, payload: res.data.value});
        setChuck(res.data.value);
        setErrors("");
        setLoading(false);

    })
    .catch((err)=>{
        // console.log("oh shit! You've got an err", err);
       // dispatch({type: FETCH_CHUCKY_FAILURE, payload: err.message});
       setChuck("");
       setErrors(err);
       setLoading(false);
    })
  };
  


  useEffect(()=>{
    getJoke();
  },[]);
  /////

  // useEffect(()=>{
  //   dispatch(fetchChuckJoke());
  // })

  


  return (
    <div>
      <img src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2012/01/chuck-norris-thumb.jpg' alt='Chuck Norris' />
      {/* Chuck Norris is a BAMF */}
      <chuckContext.Provider value={{ chuck, loading }}>
        <ChuckIsAGod />
        {/* <button onClick = {() => dispatch(fetchChuckJoke())}>More Norris Goodness</button> */}
        {/* use context >>> */}
        <button onClick = {getJoke}>More Norris Goodness</button>
        {/* if it was an array {errors.length ? errors.map(err => <p>{err}</p>) : <></> } */}
        {errors ? <p>{errors}</p> : <></>}
      </chuckContext.Provider>
    </div>
  );
}

export default App;

//using context

//imported useContext, and context files
//wrapped chuckIsAGod with chuckContext.Provider and provided value
//added useStates
//imported axios
//copy and pasted axios and actions from chuckActions and commented out
//the dispatches
