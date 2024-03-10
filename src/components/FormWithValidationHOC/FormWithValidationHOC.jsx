import { useState } from "react"

const withFormValidation = (WrappedComponent) => { // Esto es una función regular
    
    const WithFormValidation = (props) => {
        const [errors, setErrors] = useState({})

        const validateForm = () => {
            const newErrors = {};
            if(!props.formData.nombre) {
                newErrors.nombre = 'El nombre es requerido'
            }
            if(!props.formData.email) {
                newErrors.email = 'El email es requerido'
            }

            setErrors(newErrors)
        }

        return (
            <WrappedComponent 
                {...props}
                errors={errors}
                validateForm={validateForm}
            />
        )
    }

    return WithFormValidation
}


const Form = ({ formData, onChange, errors, validateForm }) => { // Esto es un COMPONENTE DE REACT.  Recibe 4 props
    const handleSubmit = (event) => { //Función interna del componente que se ejecuta al hacer SUBMIT
        event.preventDefault()

        // if(validateForm) {
        //     validateForm()
        // }

        // validateForm ? validateForm() : null 

        validateForm && validateForm(); /* Se ejecuta la función, si existe tal función (pasada x parametro) */

    }

    return (  /* El formulario tiene 2 INPUTs */
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={(e) => onChange(e)} />
                { errors && errors.nombre && <div>{errors.nombre}</div> } {/* No podría usar un IF, porque no puedo pasarlo como argumento de una función */}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={(e) => onChange(e)} />
                { errors && errors.email && <div>{errors.email}</div> }
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

const FormWithValidation = withFormValidation(Form) // Esto es un COMPONENTE DE REACT.  Llama a una función regular POR FUERA DE CUQLUIER COMPONENTE

const FormWithValidationHOC = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
{/*             <FormWithValidation formData={formData} onChange={handleChange} />
 */}            <Form formData={formData} onChange={handleChange} />
        </div>
    )
}

export default FormWithValidationHOC