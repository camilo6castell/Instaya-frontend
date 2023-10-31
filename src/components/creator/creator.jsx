import React, { useState } from "react";

// import { useForm } from '../hooks/useForm'

const Creator = ({ data, refreshParcels }) => {
  let initialForm = data;
  const [form, setForm] = useState(initialForm);
  const [modificar, setModificar] = useState(false);

  // FORM

  const handleInput = (e) => {
    if (e.target.value != "on") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.checked });
    }
  };

  // CRUD
  //ACTUALIZAR

  const uData = () => {
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("modificación realizada con éxito!");
      })
      .catch((error) => console.error(error));
    refreshParcels();
  };

  const cData = () => {
    form.state = "cancelado";
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("modificación realizada con éxito!");
      })
      .catch((error) => console.error(error));
    refreshParcels();
  };

  //ELIMINAR

  const dData = () => {
    if (
      confirm(
        `¿Eliminar registro del paquete con codigo de seguimiento ${form.tracking}?`
      )
    ) {
      fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/${form._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("envío eliminado");
          refreshParcels();
        })
        .catch((error) => console.error(error));
    } else {
      alert("hubo un error al eliminar");
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <input className="tstate" readOnly value={form.state}></input>
        </td>
        <td>
          <label className="tplace" htmlFor="cityS">
            City:{" "}
          </label>
          <input
            type="text"
            id="cityS"
            name="cityS"
            className="tplace"
            value={form.cityS}
            onChange={handleInput}
            required
          />

          <label htmlFor="addressS" className="tplace">
            Address:{" "}
          </label>
          <input
            type="text"
            id="addressS"
            name="addressS"
            className="tplace"
            value={form.addressS}
            onChange={handleInput}
            required
          />
        </td>
        <td>
          <label htmlFor="dayS">Day: </label>
          <input
            type="date"
            id="dayS"
            name="dayS"
            value={form.dayS}
            onChange={handleInput}
            required
          />

          <label htmlFor="timeS">Time zone:</label>
          <select
            name="timeS"
            id="timeS"
            value={form.timeS}
            onChange={handleInput}
            required
          >
            <option value="mañana">morning (8 - 12)</option>
            <option value="tarde">afternoon (12 - 16)</option>
            <option value="noche">evening (16 - 20)</option>
          </select>
        </td>
        <td>
          <div className="senderblock">
            <div className="sender">
              <label htmlFor="height">height in cm: </label>
              <input
                className="tmeasures"
                type="number"
                id="height"
                name="height"
                value={form.height}
                onChange={handleInput}
                required
              />

              <label htmlFor="width">width in cm: </label>
              <input
                className="tmeasures"
                type="number"
                id="width"
                name="width"
                value={form.width}
                onChange={handleInput}
                required
              />
            </div>
            <div className="sender">
              <label htmlFor="depth">depth in cm: </label>
              <input
                className="tmeasures"
                type="number"
                id="depth"
                name="depth"
                value={form.depth}
                onChange={handleInput}
                required
              />

              <label className="delicate" htmlFor="delicate">
                Delicate?:
              </label>
              <input
                className="delicate"
                type="checkbox"
                name="delicate"
                id="delicate"
                checked={form.delicate}
                onChange={handleInput}
              />
            </div>
          </div>
        </td>
        <td>
          <div className="senderblock">
            <div className="sender">
              <label htmlFor="nameR">name: </label>
              <input
                className="senderinput"
                type="text"
                id="nameR"
                name="nameR"
                value={form.nameR}
                onChange={handleInput}
                required
              />

              <label htmlFor="ccR">ID number: </label>
              <input
                className="senderinput"
                type="text"
                id="ccR"
                name="ccR"
                value={form.ccR}
                onChange={handleInput}
                required
              />
            </div>
            <div className="sender">
              <label htmlFor="cityR">city: </label>
              <input
                className="senderinput"
                type="text"
                id="cityR"
                name="cityR"
                value={form.cityR}
                onChange={handleInput}
                required
              />

              <label htmlFor="addressR">address: </label>
              <input
                className="senderinput"
                type="text"
                id="addressR"
                name="addressR"
                value={form.addressR}
                onChange={handleInput}
                required
              />
            </div>
          </div>
        </td>
        <td>
          <input className="tstate" readOnly value={form.tracking}></input>
        </td>

        {modificar ? (
          <td onClick={() => setModificar(!modificar)}>
            <button onClick={uData}>Update</button>
            <button onClick={cData}>Cancel</button>
            <button onClick={dData}>Delete</button>
          </td>
        ) : (
          <td onClick={() => setModificar(!modificar)}>
            <span>Click here to modify this shipment</span>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export { Creator };
