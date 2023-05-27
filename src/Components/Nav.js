
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav bg-danger">
      <h1 className="nav-link active fw-medium text-white" aria-current="page"
    >Youtube</h1>
      <ul>
        <li>
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link text-white" to="/about">About Us</Link>
        </li>
      </ul>
    </header>
  );
}
