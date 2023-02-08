import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Login from "./components/subcomponents/Login";
import { users } from "../src/components/util/users.js";
import User from "./components/subcomponents/User";
import axios from "axios";
import DataContext from "./layout/DataContext";

export const ProductContext = createContext();

function App() {
  return (
    <div className="App">
      <Header />
      <DataContext>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </DataContext>

      <Footer />
    </div>
  );
}

export default App;
