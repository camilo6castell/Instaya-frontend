import { useState } from 'react'

function useForm() {

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    // FORMS

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))
        if (Object.keys(errors).length === 0) {
            alert("enviando formulario")
        } else {
            alert("error")
        }
    }
    const validateForm = () => {
        let errors = {}
    
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        // let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        // let regexComments = /^.{1,255}$/;
    
        if (!form.user.trim()) {
            errors.user = 'El campo CC no puede estar vacío'
        }
    
        if (!regexName.test(form.name.trim())) {
            errors.name = 'El campo Nombre sólo puede contener letras'
        }  
        return errors
    }

    // const handleCrudSubmit = (e) => {
    //     e.preventDefault()
    //     if (form.id == null){
    //         crData(form)
    //     } else {
    //         uData(form)
    //     }
    //     handleReset()
    //     alert("formulario enviado")
    // }


  return {
    errors,
    loading,
    response,
    handleSubmit,
  }
}

export { useForm }