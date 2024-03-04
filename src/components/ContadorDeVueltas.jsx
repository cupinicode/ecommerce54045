import { useState, useEffect } from "react"

const ContadorDeVueltas = () => {
    const [vuelta, setVuelta] = useState(1) // Inicializo el contador de vueltas
    const [segundos, setSegundos] = useState(0) // Inicializo los segundos
    const [ultimaVuelta, setUltimaVuelta] = useState(0) // Inicializo el tiempo de la última vuelta
    const [minutos, setMinutos] = useState(0) // Inicializo el contador de minutos
    const [horas, setHoras] = useState(0) // Inicializo el contador de horas

    useEffect(() => {
        setSegundos(0)

        const intervalo = setInterval(() => { //intervalo contiene el nombre del intervalo, devuelto por serInterval
            setSegundos(anteriores => anteriores + 1) //Modifico el estado (le sumo 1 a los segundos)
        }, 1000) //Una vez por segundo

        return () => {
            clearInterval(intervalo) // Desactivo el setInterval actual (para que no colisione con el próximo)
        }
    },[vuelta]) //Se va a disparar la función, sólo cuando cambie "vuelta"

    useEffect(() => {
        if (segundos == 60) {
            setSegundos(0)
            setMinutos(anterior => anterior + 1)
        }
    }, [segundos])

    useEffect(() => {
        if (minutos == 60) {
            setMinutos(0)
            setHoras(anterior => anterior + 1)
        }
    }, [minutos])

    const completarVuelta = () =>{
        setVuelta(vueltaAnterior => vueltaAnterior + 1)
        setUltimaVuelta(segundos) //Actualizo el estado "ultimaVuelta" cuando aprieto el btoón "Completar vuelta"
    }

    return (
        <div>
            <h1>Contador de Vueltas</h1>
            <h3>Vuelta Actual :  {vuelta}</h3>
            <h3>Tiempo : {horas}h {minutos}m {segundos}s</h3>
            <button onClick={completarVuelta}>Completar Vuelta</button>
            <h3>Tiempo última vuelta : {ultimaVuelta} segundos</h3>
        </div>
    )
}

export default ContadorDeVueltas