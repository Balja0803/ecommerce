import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import { data } from "./components/util/data.js";
import Login from "./components/subcomponents/Login";
import Admin from "./components/subcomponents/Admin";
import { users } from "../src/components/util/users.js";
import User from "./components/subcomponents/User";
import { useParams } from "react-router-dom";

function App() {
  // localStorage.removeItem("currentUser")
  const { id } = useParams();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            localStorage.getItem("currentUser") === "admin" ? (
              <Admin />
            ) : (
              <>No access</>
            )
          }
        />
        <Route
          path="/user"
          element={
            localStorage.getItem("currentUser") === "user" ? (
              <User />
            ) : (
              <>No access</>
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
