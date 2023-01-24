import "../styles/login.css";
import { users } from "../util/users.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email is" + " " + e.target.email.value);
    console.log("password is" + " " + e.target.password.value);
    console.log(users);

    const check = users.map((user) => {
      if (user.email === email && user.password === pass) {
        setIsLogged(true);
        navigate("/");
      }
    });

    return (
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            placeholder="enter your email"
          ></input>
          <label for="password">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            id="password"
            name="password"
            type="password"
            placeholder="enter your password"
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
}
