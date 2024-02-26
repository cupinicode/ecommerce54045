import classes from './Button.module.css'

const Button = (props) => {
    return <button onClick={props.callback} className={classes.buttonColor}> {props.label} </button>
}

export default Button