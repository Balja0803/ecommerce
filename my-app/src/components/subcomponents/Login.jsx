import "../styles/login.css";
import React, { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    console.log(email);
    console.log(pass);
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
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Login
        </button>
      </form>
    </div>
  );
}
