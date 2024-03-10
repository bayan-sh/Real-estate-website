/* eslint-disable react/jsx-no-undef */
import React, { useState, useContext } from "react";
import axios from "axios";
import { Component } from "react";
//import LoginBtnChange from 'Real-estate-website-master/Real-estate-website-master/src/components/common/header/Header.jsx'
import { Cookies, useCookies, withCookies } from "react-cookie";
import { DataContext } from "../dataContext";
//import fileSyncImage from "../assets/img/undraw_file_sync_ot38.svg";

import { useHistory } from "react-router-dom";
import "../Login/Login.css";
//  import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from "../pages/Pages";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { setData } = useContext(DataContext);
  const history = useHistory();
  const mystyle = {
    paddingTop: "20px",
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = () => {
    history.push("/another-page");
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const registered = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        registered
      );

      if (response.data.message === "Successful Login") {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("UserId", response.data.UserID);
        setData(cookies.access_token);
        history.push("/");
        window.location.reload(false);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      {}

      {
        <div className="content">
          <div className="container">
            <div className="row inner-login">
              <div className="col-md-6 order-md-2 img-login ">
                {/* <img
                  src={fileSyncImage}
                  alt="File synchronization"
                  class="img-fluid"
                /> */}
              </div>

              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h3>
                        Sign In to <strong>RentUP</strong>
                      </h3>
                      <p className="mb-4">
 
                      </p>
                    </div>
                    <form
                      action="#"
                      method="post"
                      onSubmit={onSubmit}
                      style={mystyle}
                    >
                      <div className="form-group first">
                        <label for="email"></label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="email"
                          onChange={changeEmail}
                          value={email}
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <label for="password"></label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="password"
                          onChange={changePassword}
                          value={password}
                        />
                      </div>

                      <input
                        type="submit"
                        value="Login"
                        className="btn text-white btn-block btn-primary login-submit"
                      />
                      <div className="container signin">
                        <p>
                          didn't have an account?{" "}
                          <a href="/creatAnAccount">Create an account</a>.
                        </p>
                      </div>

                      <div className="social-login">
                        <a href="#" class="facebook">
                          <span class="icon-facebook mr-3"></span>
                        </a>
                        <a href="#" class="twitter">
                          <span class="icon-twitter mr-3"></span>
                        </a>
                        <a href="#" class="google">
                          <span class="icon-google mr-3"></span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Login;

