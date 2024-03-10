import { useState } from "react"

export const useCounter = (initialVal = 0) => { // Hago el EXPORT NOMBRADO, directamente mientras declaro la función
    // Recibo un parámetro en useCount (por defecto es CERO)
    const [count, setContador] = useState(initialVal) // Inicalizo el estado con lo que me pasaron por parámetro

    const decrement = () => {
        setContador(valorPrevio => valorPrevio - 1)
    }

    const increment = () => {
        setContador(valorPrevio => valorPrevio + 1)
    }

    return {
        count,
        decrement,
        increment
    }

}