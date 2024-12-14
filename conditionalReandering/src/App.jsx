import { useState } from 'react'
// import LoginBtn  from './components/LoginBtn' ;
import LogoutBtn from './components/LogoutBtn';
import LogintBtn from './components/LoginBtn';
import './App.css'

function App() {
  const [ isloggedin ,setLoggedin] = useState(false) 
  
  // return (
  //  <div>
  //   {isloggedin ? < LogoutBtn/> : < LogintBtn/>}
  //  </div>
  // );

  return (
    <div>
      <h1>hello jeee</h1>
      <div>
      {isloggedin && <LogoutBtn /> }
      </div>
    </div>
  ) ;
}

export default App 



