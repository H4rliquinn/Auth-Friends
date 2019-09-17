import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

const Login = props => {
  //   console.log("Login", props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  //   console.log("Cred", credentials);
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
