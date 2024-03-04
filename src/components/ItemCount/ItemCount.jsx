import { useState, useEffect } from "react" // un array.  [1] estado   [2] funcion que lo cambia

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initVal) //Desestructuro el array en 2 valores e inicializo el HOOK en CERO

    useEffect(()=>{
        console.log('Ejecuté el useEffect')
    }, []) //En el array pongo la lista de dependencias.  Los estados que deben verificarse para ejecutar esta función

    useEffect(()=>{
        console.log('Ejecuté el useEffect')
        document.title='Contador en : ' + count

        return () => {
            console.log('Limpieza useEffect')
            document.title='Vite + React'
        }

    }, [count]) // Sólo se ejecuta la func cuando 'count' cambie de estado



    const increment = () => {
        if (count < props.max) setCount(count => count + 1) //setCount(count + 1)
    }

    const decrement = () => {
        if (count > props.min) setCount(anterior => anterior - 1) //setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount