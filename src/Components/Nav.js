import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>Youtube</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
}
