import cartImage from './assets/shopping-cart-outline.svg'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div>
            <img src={ cartImage } className={ classes.CartIcon }   alt="Carrito de Compras" />
            0
        </div>
    )
}

export default CartWidget