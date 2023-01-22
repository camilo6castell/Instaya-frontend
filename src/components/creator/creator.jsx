import React, { useState } from 'react'

// import { useForm } from '../hooks/useForm'

const Creator = ({ data, refreshParcels }) => {
    let initialForm = data
    const [form, setForm] = useState(initialForm)
    const [modificar, setModificar] = useState(false)

    // FORM 

    const handleInput = (e) => {
        if (e.target.value != "on") {
            setForm({...form, [e.target.name]:e.target.value})
        } else {
            setForm({...form, [e.target.name]:e.target.checked})
        }
    }

    // CRUD
        //ACTUALIZAR

    const uData = () => {
        fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/`, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("modificación realizada con éxito!")
        })
        .catch(error => console.error(error))
        refreshParcels()
    }

    const cData = () => {
        form.state = "cancelado"
        fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/`, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("modificación realizada con éxito!")
        })
        .catch(error => console.error(error))
        refreshParcels()
    }

        //ELIMINAR

    const dData = () => {        
        if (confirm(`¿Eliminar registro del paquete con codigo de seguimiento ${form.tracking}?`)) {
            fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/${form._id}`, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("envío eliminado")
                refreshParcels()
            })
            .catch(error => console.error(error))
            
        } else {
            alert("hubo un error al eliminar")
        }
    }

    return (
        <tbody>
        <tr>
            <td>
                <input className='tstate' readOnly value={form.state}></input>
            </td>
            <td>
                <label className='tplace' htmlFor="cityS">Ciudad: </label>
                <input type="text" id='cityS' name='cityS' className='tplace' value={form.cityS} onChange={handleInput} required/>

                <label htmlFor="addressS" className='tplace' >Dirección: </label>
                <input type="text" id='addressS' name='addressS' className='tplace' value={form.addressS} onChange={handleInput} required/>
            </td>
            <td>
                <label htmlFor="dayS">Día</label>
                <input type="date" id='dayS' name='dayS' value={form.dayS} onChange={handleInput} required/>

                <label htmlFor="timeS">Franja horaria</label>
                <select name="timeS" id="timeS" value={form.timeS} onChange={handleInput} required>
                    <option value="mañana">mañana (8 - 12)</option>
                    <option value="tarde">tarde (12 - 16)</option>
                    <option value="noche">noche (16 - 20)</option>
                </select>
            </td>
            <td>
                <div className="senderblock">
                    <div className="sender">
                            <label htmlFor="height">alto en cm</label>
                            <input className='tmeasures' type="number" id='height' name='height' value={form.height} onChange={handleInput} required/>

                            <label htmlFor="width">ancho en cm</label>
                            <input className='tmeasures' type="number" id='width' name='width' value={form.width} onChange={handleInput} required/>
                    </div>
                    <div className="sender">
                        
                            <label htmlFor="depth">profundidad en cm</label>
                            <input className='tmeasures' type="number" id='depth' name='depth' value={form.depth} onChange={handleInput} required/>

                            <label className='delicate' htmlFor="delicate">¿Delicado?</label>
                            <input className='delicate' type="checkbox" name="delicate" id="delicate" checked={form.delicate} onChange={handleInput}/>
                    </div>
                </div>
            </td>
            <td>
                <div className="senderblock">
                    <div className="sender">
                        <label htmlFor="nameR">Nombre completo</label>
                        <input className='senderinput' type="text" id='nameR' name='nameR' value={form.nameR} onChange={handleInput} required />

                        <label htmlFor="ccR">Cédula</label>
                        <input className='senderinput' type="text" id='ccR' name='ccR' value={form.ccR} onChange={handleInput} required/>
                    </div>
                    <div className="sender">
                        <label htmlFor="cityR">Ciudad</label>
                        <input className='senderinput' type="text" id='cityR' name='cityR' value={form.cityR} onChange={handleInput} required/>

                        <label htmlFor="addressR">Dirección</label>
                        <input className='senderinput' type="text" id='addressR' name='addressR' value={form.addressR} onChange={handleInput} required/>
                    </div>
                </div>
            </td>
            <td>
                <input className='tstate' readOnly value={form.tracking}></input>
            </td>

            { modificar ? (
                
                <td onClick={() => setModificar(!modificar)}>
                    <button onClick={uData}>Actualizar</button>
                    <button onClick={cData}>cancelar</button> 
                    <button onClick={dData}>eliminar</button>
                </td>
            ) : (
                <td onClick={() => setModificar(!modificar)}>
                    <span>Click acá para modificar este envío</span>
                </td>
            )}
        </tr>
        </tbody>
    )
}

export { Creator }
