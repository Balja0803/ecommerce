import "../styles/login.css";
import { users } from "../util/users.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email is" + " " + email);
    console.log("password is" + " " + pass);
    console.log(users);
    if (
      users.map((user) => user.email === email) &&
      users.map((user) => user.password === pass)
    ) {
      console.log("user zuv baina");
      if (users.map((user, index) => user.role == "admin")) {
        navigate("/admin");
      } else {
        navigate(`/user/${users.map((user) => user.id)}`);
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
          placeholder="enter your email"
        ></input>
        <label for="password">Password</label>
        <input
          value={pass}
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
