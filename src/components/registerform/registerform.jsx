import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import bcrypt from "bcryptjs";
import styled from "styled-components";

// import './registerform.css'

// SEGURIDAD DEL CREDENCIALES

const salt = bcrypt.genSaltSync(10);

const initialForm = {
  name: "",
  cc: "",
  password: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);

  const handleInput = (e) => {
    if (e.target.value != "on") {
      console.log(e.target.value);
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.checked });
    }
  };

  const cUser = () => {
    const hashedPassword = bcrypt.hashSync(form.password, salt);
    form.password = hashedPassword;
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/users/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => crypres.json())
      .then((data) => {
        if (data.statusCode === 200) {
          alert("usuario creado, ahora puedes iniciar sesión");
          navigate("/");
        } else {
          alert("El usuario ya existe");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormStyled2>
      <Form className="form" onSubmit={cUser}>
        <fieldset>
          <div>
            <legend>Enter your details</legend>
          </div>

          <label htmlFor="name"> Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />

          <label htmlFor="cc"> ID number </label>
          <input
            type="number"
            id="cc"
            name="cc"
            value={form.cc}
            onChange={handleInput}
            required
          />

          <label htmlFor="password"> Your password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleInput}
            required
          />

          <div className="formadd">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">
              Do you accept the <a href="">terms and conditions</a>?
            </label>
          </div>

          <button className="buttonForm" type="submit">
            Sign up!
          </button>
        </fieldset>
      </Form>
    </FormStyled2>
  );
};

const FormStyled2 = styled.div`
  && {
    width: fit-content;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 1rem;
    border-radius: 1.5rem;

    background: linear-gradient(rgba(83, 42, 75, 0.2), rgba(40, 79, 85, 0.2));

    backdrop-filter: blur(20px);
    color: white;

    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
  }

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  legend {
    font-size: 2rem;
    color: aliceblue;
    padding: 0.8rem;
  }

  label {
    margin: 1rem;
    font-weight: 800;
  }

  .formadd {
    margin: 1rem;
  }

  button {
    display: block;

    text-decoration: none;
    background-color: aquamarine;

    padding: 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
  }

  input {
    background-color: rgba(40, 79, 85, 0);
    color: aliceblue;
    border: none;
    border: dotted 0.01rem;
  }
`;

export default RegisterForm;
