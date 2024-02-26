import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
/* import Button from './components/Button/Button'
import ItemCount from './components/ItemCount/ItemCount'
 */
function App() {
  console.log('Render de inicio de App')
  return (
    <>
      <ItemListContainer greeting='Bienvenido al E-Commerce de DataSolutions Argentina'/>
      <NavBar />
{/*       <Button label='Ver más' callback={()=>console.log('Ver más')}/>
      <Button label='Filtrar' callback={()=>console.log('Filtrar')}/>
      <Button label='Volver'callback={()=>console.log('Volver')}/>
      <ItemCount initVal={0} min={0} max={10}/>
      <ItemCount initVal={35} min={30} max={70}/>
      <ItemCount initVal={75} min={-5} max={75}/>
 */}    </>
  )
}

export default App
