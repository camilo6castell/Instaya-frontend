import React from "react";
import "./nav.css";
import logo from "./i.png";
import { Clock } from "../clock/clock";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = () => {
  let [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setUser(true);
    } else {
      setUser(false);
    }

    //   return () => {
    //     second
    //   }
  }, [user]);

  const clearsession = () => {
    localStorage.removeItem("accessToken");
    setUser(false);
  };

  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="instaya" />
        </Link>
        <div className="menu">
          <Clock />
          <nav>
            {user ? (
              <ul>
                <li className="text-nav">
                  <Link to={"/"} onClick={clearsession}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul></ul>
            )}
          </nav>
        </div>
      </HeaderStyled>
      <Outlet context={[user, setUser]} />
    </>
  );
};

const HeaderStyled = styled.header`
  && {
    position: relative;
    top: 0;
    background-color: rgba(35, 0, 6, 0.945);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
  }

  img {
    height: 3rem;
    transition: all 0.5s;
  }
  a {
    margin: 0 2rem;
  }

  .menu {
    display: flex;
    align-items: center;
  }
  .clock {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(147, 177, 167);
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0 2rem;
    width: 8rem;
  }
  .modo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aquamarine;
    padding: 0.5rem;
    border-radius: 1rem;
    margin: 0 2rem;
  }

  ul {
    list-style: none;
    margin: 0 2rem;
  }

  li {
    display: inline-block;
    margin: 0 1rem;
  }
  .text-nav {
    color: rgb(217, 217, 217);
    text-decoration: none;
  }

  img:hover {
    transform: scale(1.3);
  }

  nav li:hover {
    transform: scale(1.3);
    color: rgb(232, 232, 147);
  }
`;

export default Nav;
