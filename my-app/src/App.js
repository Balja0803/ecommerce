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

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2020/products").then((res) => {
      console.log("serverees data:", res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductContext.Provider value={{ products, setProducts }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </ProductContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
