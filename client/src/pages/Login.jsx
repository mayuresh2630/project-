import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });

  const authenticate = async () => {
    let user = userData.find((obj) => {
      return obj.email === details.email && obj.password === details.password;
    });
    if (user) {
      return user.token;
    }
    return null;
  };
  const handleSubmit =async () => {

    let checkUser = await authenticate();
    console.log("check",checkUser)
    if (checkUser) {
      localStorage.setItem("token",checkUser);
      navigate("/Dashboard");
    } else {
      alert("Wrong credentials");
    }
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser = res.data.user;
      navigate("/");
    });
  };

  return (
    <div className="login">
      {/* <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/Register")}>Register</div> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div><p>email</p>
        <input
          type="email"
          required
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        </div>
        <div><p>password</p>
        <input
          type="password"
          required
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
        </div>

        <button onClick={() => handleSubmit()}>Submit</button>
      </form>
    </div>
  );
};

export default Login;

const userData = [
  {
    email: "pradnya@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
  {
    email: "pradnya2@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
  {
    email: "pradnya3@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
];
