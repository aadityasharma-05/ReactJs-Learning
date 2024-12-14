import { useState } from 'react'
// import { getDatabase , ref ,set  } from "firebase/database" ;
// import { app } from './firebase.js' ;
import { getDatabase, ref, set } from "firebase/database";

import './App.css'


// const db = getDatabase(app) ;
function App() {
  // const [count, setCount] = useState(0)
   


  

    // const putData = () => {
    //   set(ref(db,'user/aditya'),{
    //     id : 1 ,
    //     name : "aditya" , 
    //     age : 21 ,
    //   } ) ;
    //  } ;
  return (
   <div className='App'>
    <h1>firebase React App</h1>
    {/* <button onClick={putData}> put data</button> */}
   </div>
  )
}

export default App
