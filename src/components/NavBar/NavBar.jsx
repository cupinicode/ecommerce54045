import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <header className={classes.header}>
        <nav>
          <a className='btn btn-primary' href="">Software</a>
          <a className='btn btn-primary' href="">Hardware</a>
          <a className='btn btn-primary' href="">Servicios</a>
        </nav>
        <CartWidget />
</header>
    )
}

export default NavBar