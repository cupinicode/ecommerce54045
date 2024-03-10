
import { useEffect, useState } from 'react'

import { getProducts } from '../../asyncMock' //Va ente llaves porque es un EXPORT nombrado (no es DEFAULT)


const ItemListContainer = ( {greeting} ) =>{ //Desestructuro el objeto PROPS directamente en el parámetro del componente
    //const { greeting } = props

    const [products, setProducts] = useState([])

    useEffect(() =>{ //Manejo la conexión con el sistema externo
        getProducts()
          .then(result => {
            console.log(result) //Muestro el array, una vez resuelta la promesa
            setProducts(result) //Actualizo el estado, una vez que se completó la promesa
          })
          .catch((error) => {
            console.log(error)
          })
      }, []) // corchetes vacíos si sólo lo quiero ejecutar cuando monto el componente
    
    console.log(products) //Esta línea es lo primero que tengo que ver por consola (array vacío, recién inicializado)

    const productsComponents = products.map((unProducto) =>{ //Convierto el array de objetos en array de componentes
        return (
            <div>
                <h2>{ unProducto.name }</h2>
                <img src={ unProducto.src} style={{width: 100}} /> 
                <h3>Precio: ${unProducto.price}</h3>
            </div>
        )
    })
    
    return (
        <div>
            <h2>{ greeting }</h2>
            {productsComponents}
        </div>
    )
}

export default ItemListContainer