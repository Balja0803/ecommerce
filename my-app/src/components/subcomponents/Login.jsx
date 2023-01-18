import "../styles/login.css";
export default function Login() {
  return (
    <div className="login">
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Submit
        </button>
      </form>
    </div>
  );
}
