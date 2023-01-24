import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { data } from "./components/util/data.js";
import Login from "./components/subcomponents/Login";
import { users } from "../src/components/util/users.js";
import User from "./components/subcomponents/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
