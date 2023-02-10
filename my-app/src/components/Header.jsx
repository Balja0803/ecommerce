import Logo from "../icons/Logo";
import "./styles/header.css";
import { useNavigate } from "react-router-dom";
import SignInLogo from "../icons/Icon";
import Cart from "../icons/Cart";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const signIn = () => {
    navigate("login");
  };

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <span onClick={homeHandler}>
        <Logo />
      </span>
      <div className="searchBar">
        <input
          id="searchBar"
          type="text"
          placeholder="Search anything but"
        ></input>
        <button className="search-button">Search</button>
      </div>
      <div className="header-right">
        <div onClick={signIn} className="sign-in">
          <SignInLogo />
          <p>Sign in</p>
        </div>
        <div className="cart">
          <Button
            style={{ display: "flex" }}
            variant="primary"
            onClick={handleShow}
          >
            <Cart />
            <p>0</p>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Orders</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>s</Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}
