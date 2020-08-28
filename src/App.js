import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchChuckJoke} from "./actions/chuckActions";




function App() {
  useEffect(()=>{

  }, [])
  return (
    <div>
      <img src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2012/01/chuck-norris-thumb.jpg' alt='Chuck Norris' />
      Chuck Norris is a BAMF
    </div>
  );
}

export default App;
