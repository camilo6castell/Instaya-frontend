import { useState } from 'react'
import { Form, useNavigate } from "react-router-dom";

import bcrypt from 'bcryptjs'



// import './registerform.css'

const hostp = "http://localhost:5000"

// SEGURIDAD DEL CREDENCIALES

const salt = bcrypt.genSaltSync(10)

const initialForm = {
    name: "",
    cc: "",
    password: "",
}

const RegisterForm = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)

    const handleInput = (e) => {
        if (e.target.value != "on") {
            setForm({...form, [e.target.name]:e.target.value})
        } else {
            setForm({...form, [e.target.name]:e.target.checked})
        }
    }

    const cUser = () => {
        const hashedPassword = bcrypt.hashSync(form.password, salt)
        form.password = hashedPassword
        fetch(`${hostp}/api/users/`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.statusCode === 200){
                alert("usuario creado, ahora puedes iniciar sesión")
                navigate("/")
            } else {
                alert('El usuario ya existe')
            }
        })
        .catch(error => console.log(error))
    }
    
  
    return (
        <Form className='form' onSubmit={cUser}>
            <fieldset>
                <div><legend>Ingresa tus datos</legend></div>

                <label htmlFor="name"> Tu nombre completo</label>
                <input type="text" id='name' name='name' value={form.name} onChange={handleInput} required/>

                <label htmlFor="cc"> Tu CC </label>
                <input type="number" id='cc' name='cc' value={form.cc} onChange={handleInput} required/>
                
                <label htmlFor="password"> Tu contraseña </label>
                <input type="password" id='password' name='password' value={form.password} onChange={handleInput} required/>
                
                <div className='formadd'>
                    <input type="checkbox" name="terms" id="terms" required/>
                    <label htmlFor="terms">¿Aceptas los <a href="">términos y condiciones</a>?</label>
                </div>
    
                <button className='buttonForm' type='submit'>Registrarse</button>             
            </fieldset>
        </Form>
    )
}

export default RegisterForm