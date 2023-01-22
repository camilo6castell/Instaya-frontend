import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'

import CryptoJS from "react-native-crypto-js";

import './loginform.css'

const initialForm = {
    cc: "",
    password: "",
}

const LoginForm = () => {

    const navigate = useNavigate()
    const [form, setForm] = useState(initialForm)

    const handleInput = (e) => {
        if (e.target.value != "on") {
            setForm({...form, [e.target.name]:e.target.value})
        } else {
            setForm({...form, [e.target.name]:e.target.checked})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${import.meta.env.VITE_BACK_HOST}/api/users/${form.cc}`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json()
        .then(data => {
            if (data.statusCode == 404) {
                alert(data.status)
            } else {
                localStorage.setItem('accessToken', data.session)
                navigate('/envios')
            }            
        }))
    }
    
    return (
        <Form className='form' onSubmit={handleSubmit}>
            <fieldset>
                <div><legend>Iniciar sesión</legend></div>

                <label htmlFor="user"> CC </label>
                <input type="number" id='cc' name='cc' value={form.cc} onChange={handleInput} required/>
                
                <label htmlFor="password"> Contraseña </label>
                <input type="password" id='password' name='password' value={form.password} onChange={handleInput} required/>
    
                <button className='buttonForm' type='submit'>Ingresar!</button>
                <div className='rAca'>
                    <label htmlFor="">¿No tienes una cuenta?</label>

                    <Link to={'/registrarse'}>¡registrarse acá!</Link>
                </div>
            </fieldset>          
        </Form>
    )
}

export default LoginForm