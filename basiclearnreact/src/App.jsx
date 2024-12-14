import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 
  const [ count , setCount] = useState(0) ; 

  const addvalue = () => {
    setCount(count + 1 ) ; 
  }

  const removevalue =() => {
    setCount(count - 1 ) ; 
  }

  return (
    <>
   <h1>the couser is the best in the world </h1>

   <button onClick={addvalue}>Add value </button> { "  "}
   <button onClick={removevalue}> remove value</button>
 
  <br />
   <button> value{count} </button>
    
   </>
  )
}

export default App
