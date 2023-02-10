import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

import Login from "./components/subcomponents/Login";

import User from "./components/subcomponents/User";

import { ProductContext } from "./layout/ProductContext";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

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
