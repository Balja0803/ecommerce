import Logo from "./subcomponents/Logo";
import "./styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="searchBar">
        <input
          id="searchBar"
          type="text"
          placeholder="Search anything but Gwyndolin"
        ></input>
        <button>Search</button>
      </div>
      <div className="header-right">
        <div className="sign-in">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4999 12C15.2614 12 17.4999 9.76142 17.4999 7C17.4999 4.23858 15.2614 2 12.4999 2C9.73852 2 7.49994 4.23858 7.49994 7C7.49994 9.76142 9.73852 12 12.4999 12Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0899 22C21.0899 18.13 17.2399 15 12.4999 15C7.75991 15 3.90991 18.13 3.90991 22"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Sign in</p>
        </div>
        <div className="cart">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.49994 2H4.23994C5.31994 2 6.16994 2.93 6.07994 4L5.24994 13.96C5.10994 15.59 6.39993 16.99 8.03993 16.99H18.6899C20.1299 16.99 21.3899 15.81 21.4999 14.38L22.0399 6.88C22.1599 5.22 20.8999 3.87 19.2299 3.87H6.31995"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.7499 22C17.4403 22 17.9999 21.4404 17.9999 20.75C17.9999 20.0596 17.4403 19.5 16.7499 19.5C16.0596 19.5 15.4999 20.0596 15.4999 20.75C15.4999 21.4404 16.0596 22 16.7499 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.74994 22C9.44029 22 9.99994 21.4404 9.99994 20.75C9.99994 20.0596 9.44029 19.5 8.74994 19.5C8.05958 19.5 7.49994 20.0596 7.49994 20.75C7.49994 21.4404 8.05958 22 8.74994 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.49994 8H21.4999"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
