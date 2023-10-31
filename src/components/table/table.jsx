import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Creator } from "../creator/creator";
import { TableStyled } from "../../../ui/tableStyled";

// import { useForm } from './hooks/useForm'

const initialForm = {
  cc: "",
  state: "guardado",
  cityS: "",
  addressS: "",
  dayS: "",
  timeS: "mañana",
  height: "",
  width: "",
  depth: "",
  delicate: false,
  nameR: "",
  ccR: "",
  cityR: "",
  addressR: "",
};

// const loader = () => {
//     const isUser = localStorage.getItem('accessToken')
//     if (isUser) {
//         return redirect('/envios')
//     } else {
//         return redirect('/')
//     }
//   };

const Table = () => {
  const [form, setForm] = useState(initialForm);
  const [db, setDb] = useState([]);

  const [user, setUser] = useOutletContext();

  // REFRESCAR TABLA CON INFO DE LA BASE DE DATOS

  function refreshParcels() {
    // conectar session
    const session = localStorage.getItem("accessToken");
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/${session}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("componente montado");
        console.log(data);
        setDb(data.parcel);
        setUser(true);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    refreshParcels();
  }, []);

  // FORM

  // const handleBlur = (e) => {
  //     handleInput(e)
  //     setErrors(validateForm(form))
  // }
  const handleInput = (e) => {
    if (e.target.value != "on") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.checked });
    }
  };

  // CRUD

  //CREAR REGISTRO

  const crData = () => {
    const session = localStorage.getItem("accessToken");
    form.tracking = makeTC(5);
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/parcels/${session}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Envío guardado");
        refreshParcels();
        setForm(initialForm);
      })
      .catch((error) => console.log(error));
  };

  // TRACKINGCODE

  function makeTC(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <TableStyled>
      <caption>Shipping history</caption>
      <thead>
        <tr className="table-head">
          <th className="tplace">state</th>
          <th className="c2">pick up location</th>
          <th className="c3">pick up timee</th>
          <th className="c4">package information</th>
          <th className="c5">addressee</th>
          <th className="c6">tracking code</th>
          <th className="c7">available actions</th>
        </tr>
      </thead>

      {db.length == 0 ? (
        <tbody>
          <tr className="empty-container">
            <td colSpan="7" className="empty-registry">
              There are no shipping records.
            </td>
          </tr>
        </tbody>
      ) : (
        db.map((user) => (
          <Creator
            key={user._id}
            data={user}
            setDb={setDb}
            refreshParcels={refreshParcels}
          />
        ))
      )}

      <tfoot>
        <tr>
          <td>
            <input className="tstate" readOnly value=""></input>
          </td>
          <td>
            <label className="tplace" htmlFor="cityS">
              City:{" "}
            </label>
            <input
              className="tplace"
              type="text"
              id="cityS"
              name="cityS"
              value={form.cityS}
              onChange={handleInput}
              required
            />

            <label className="tplace" htmlFor="addressS">
              Address:{" "}
            </label>
            <input
              className="tplace"
              type="text"
              id="addressS"
              name="addressS"
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

            <label htmlFor="timeS">Time zone: </label>
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
          <td className="tdmeasure">
            <div className="tdmeadure1">
              <div className="tdmeasure2">
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
              </div>
              <div className="tdmeasure2">
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
            </div>
            <div className="tdmeadure1">
              <div className="tdmeasure2">
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
              </div>
              <div className="tdmeasure2">
                <label className="delicate" htmlFor="delicate">
                  Delicate?:
                </label>
                <input
                  className="delicate"
                  type="checkbox"
                  name="delicate"
                  id="delicate"
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
            <input className="tstate" readOnly value=""></input>
          </td>
          <td>
            <button onClick={crData}> Create!!</button>
          </td>
        </tr>
      </tfoot>
    </TableStyled>
  );
};

export { Table };
