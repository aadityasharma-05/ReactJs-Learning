import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Cards from "./components/Cards"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < Cards name = "amit" />
     < Cards name = "kabir" />
     < Cards name = "bhumi" />

       
    </>
  )
}

export default App
