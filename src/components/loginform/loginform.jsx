import React, { useState } from "react";

import { Form, Link, useNavigate } from "react-router-dom";

import { FormStyled, FormHelpStyled } from "../../../ui/formStyled";

// import "./loginform.css";

const initialForm = {
  cc: "",
  password: "",
};

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleInput = (e) => {
    if (e.target.value != "on") {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.checked });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACK_HOST}/api/users/${form.cc}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          console.log(data.session);
          localStorage.setItem("accessToken", data.session);
          navigate("/envios");
        }
      });
  };

  return (
    <FormStyled>
      <Form className="form" onSubmit={handleSubmit}>
        <fieldset className="items-form">
          <label htmlFor="user">ID Number</label>
          <input
            type="number"
            id="cc"
            name="cc"
            value={form.cc}
            onChange={handleInput}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleInput}
            required
          />

          <button className="buttonForm" type="submit">
            Login!
          </button>
          <div className="rAca">
            <label htmlFor="">Don't have an account?</label>

            <Link to={"/registrarse"}>Sign up!</Link>
          </div>
        </fieldset>
      </Form>
      <FormHelpStyled>
        <div className="title">Data for testing</div>
        <div className="help-container flex-column">
          <div className="help-info">
            <span className="help-label">USER</span>
            <span className="help-test"> 12345</span>
          </div>
          <div className="help-info">
            <span className="help-label">PASSWORD</span>
            <span className="help-test">12345</span>
          </div>
        </div>
      </FormHelpStyled>
    </FormStyled>
  );
}
