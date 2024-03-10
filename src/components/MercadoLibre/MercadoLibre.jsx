import { useState } from "react" 
const MercadoLibre = () => {

    const [items, setItems] = useState([])

    const [input, setInput] = useState('')

    const handleOnSubmit = (e) => { //Funcion que controla el boton SUBMIT.  Recibe el EVENTO
        e.preventDefault()  // Setea el EVENTO para que no se recargue la pagina
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`) //Le paso una URL y un objeto de configuracion (opcional)
            .then(response => { //FETCH me devuelve una promesa.  A esa promesa le aplico el METODO JSON (parsea el texto), que también me devuelve una promesa
                return response.json()})  // retorno LA PROMESA que me devuelve el método JSON
            .then(json => {
                setItems(json.results)  // Actualizo el estado, porque ya recibí los datos de la API
                console.log(json.results)  // Sólo para debug
            }) 
            .catch(error => console.error(`Se produjo el error ${error}`)) // Capturo el error, de existir
    }


    return(
        <div/*  style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} */> 
            <h1>MercadoLibre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value= { input } onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
            <section>
                {   
                    items.map(item => { //Con MAP convierto cada ITEM en una tarjeta (ARTICLE)
                        return (
                            <article key={ item.id }> 
                                <h3>{ item.title }</h3>
                                <img src={ item.thumbnail } alt="" />
                                <h3>{ item.price }</h3>
                            </article>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default MercadoLibre