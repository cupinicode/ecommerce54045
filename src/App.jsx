import './App.css'
import { useState, useEffect } from "react" // un array.  [1] estado   [2] funcion que lo cambia
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
import ContadorDeVueltas from './components/ContadorDeVueltas'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={ 'Bienvenidos !!!!!!!' } />
{/*   <ContadorDeVueltas />    <button onClick={()=> setShow(estadoAnterior => !estadoAnterior)}>{show ? 'Ocultar' : 'Mostrar'}</button>
      {show ? <ItemCount initVal = {1}/> : null} 
 */}    </>
  )
  
}

export default App
