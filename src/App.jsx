import './App.css'
import MercadoLibre from "./components/MercadoLibre/MercadoLibre"
import { useState, useEffect } from "react" // un array.  [1] estado   [2] funcion que lo cambia

const  App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <MercadoLibre />
    </>
  )
  
}

export default App
