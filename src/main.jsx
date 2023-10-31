import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";

import Nav from "./components/nav/nav";
import Error from "./routes/error";
import { Table } from "./components/table/table";
import LoginForm from "./components/loginform/loginform";
import RegisterForm from "./components/registerform/registerform";

const loader = () => {
  const user = localStorage.getItem("accessToken");
  if (!user) {
    return redirect("/");
  } else {
    return user;
  }
};

let userSession = localStorage.getItem("accessToken");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav userSession={userSession} />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <App>
            <LoginForm />
          </App>
        ),
      },
      {
        path: "/envios",
        element: (
          <App>
            <Table />
          </App>
        ),
        loader: loader,
      },
      {
        path: "/registrarse",
        element: (
          <App>
            <RegisterForm />
          </App>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
