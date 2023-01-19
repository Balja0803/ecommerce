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
    console.log("email is" + " " + email);
    console.log("password is" + " " + pass);
    console.log(users);
    users.map((user) => {
      if (user.email === email && user.password === pass) {
        setIsLogged(true);
        if (user.role === "admin") {
          localStorage.setItem("currentUser", "admin");
        } else if (user.role === "user") {
          localStorage.setItem("currentUser", "user");
          navigate("/user");
        }
        navigate("/admin");
      }
    });
  };

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
          placeholder="*********"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
