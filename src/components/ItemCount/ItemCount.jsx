import { useState } from "react" // un array.  [1] estado   [2] funcion que lo cambia

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initVal) //Desestructuro el array en 2 valores e inicializo el HOOK en CERO

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