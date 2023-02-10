import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

import Login from "./components/subcomponents/Login";

import User from "./components/subcomponents/User";

import { UserContext } from "./layout/UserContext";
import { ProductContext } from "./layout/ProductContext";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider value={{ users, setUsers }}>
        <Header />
        <ProductContext.Provider value={{ products, setProducts }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </ProductContext.Provider>
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
