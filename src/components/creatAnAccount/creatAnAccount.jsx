import React, { useState, useContext } from "react";
//import NativeSelect from "@mui/material/NativeSelect";
//import { ToastContainer, toast } from "react-toastify";
import "../creatAnAccount/creatAnAccount.css";
import { useHistory } from "react-router-dom";
import { DataContext } from "../dataContext";
import { Cookies, useCookies, withCookies } from "react-cookie";
import axios from "axios";
import { Component } from "react";

function createAnAccount() {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // const [cookies, setCookies] = useCookies(['access_token']);
  const { setData } = useContext(DataContext);

  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const registered = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      address: address,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/user/signup",
        registered
      );

      if (response.data.message === "Successful Reg") {
        // setCookies('access_token', response.data.token);
        // window.localStorage.setItem('UserId', response.data.UserID);
        // setData(cookies.access_token);
        history.push("/login");
        window.location.reload(false);
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }


    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setAddress("");
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row inner-login">
            <div className="col-md-6 order-md-2 img-login">
              {/* <img
                src={fileSyncImage}
                alt="File synchronization"
                className="img-fluid"
              /> */}
            </div>

            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>
                      Sign UP in <strong>RentUP</strong>
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                </div>
                <form action="#" method="post" onSubmit={onSubmit}>
                  <div className="form-group first">
                    <label htmlFor="text"></label>
                    <input
                      type="text"
                      placeholder="UserName"
                      onChange={(e) => setUserName(e.target.value)}
                      value={username}
                    ></input>
                    <label htmlFor="text">
                      <b></b>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullname}
                    ></input>
                    <label htmlFor="email"></label>
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Name @ gmail.com"
                    ></input>
                  </div>
                  <label htmlFor="psw">
                    <b></b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  ></input>
                  <label htmlFor="psw-repeat">
                    <b></b>
                  </label>
                  {/* <input
                    type="password"
                    placeholder="Repeat Password"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                  ></input> */}
                  <label htmlFor="text">
                    <b></b>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    name="address"
                    id="address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  ></input>

                  <input
                    type="submit"
                    value="SignUp"
                    className="btn text-white btn-block btn-primary login-submit"
                  />
                  <div className="container signin">
                    <p>
                      You have an account? <a href="/login">Login</a>.
                    </p>
                  </div>

                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="icon-facebook mr-3"></span>
                    </a>
                    <a href="#" className="twitter">
                      <span className="icon-twitter mr-3"></span>
                    </a>
                    <a href="#" className="google">
                      <span className="icon-google mr-3"></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
     </>
   );
}

export default createAnAccount;
