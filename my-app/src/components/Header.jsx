import Logo from "../icons/Logo";
import "./styles/header.css";
import { useNavigate } from "react-router-dom";
import SignInLogo from "../icons/Icon";
import Cart from "../icons/Cart";
export default function Header() {
  const navigate = useNavigate();

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
        <button>Search</button>
      </div>
      <div className="header-right">
        <div onClick={signIn} className="sign-in">
          <SignInLogo />
          <p>Sign in</p>
        </div>
        <div className="cart">
          <Cart />
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
