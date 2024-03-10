import { useCounter } from "../../hooks/useCounter"

const ItemCount = ({initValue}) => {
    const { count, decrement, increment} = useCounter(initValue) // Le pongo PARENTESIS para que se ejecute.  Lo hago al principio del componente (nivel superior)
    return (                                        // Desestructuro el OBJETO que me retorna useCount
        <div>
            <h1>{ count }</h1> {/* muestro el estado en el h1 */}
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount