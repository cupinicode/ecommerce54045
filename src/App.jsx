import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import FormWithValidationHOC from './components/FormWithValidationHOC/FormWithValidationHOC'
import TaskFilterRenderProps from './components/TaskFilterRenderProps/TaskFilterRenderProps'

const  App = () => {

  return (
    <>
{/*       < ItemCount initValue={84}/> */}
{/*       <FormWithValidationHOC /> */}
      <TaskFilterRenderProps />
    </>
  )
  
}

export default App
