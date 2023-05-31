import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav bg-danger">
      <h1 className="nav-link active fw-medium text-white" aria-current="page">
        Youtube
      </h1>

      <Link className="nav-link text-white" to="/">
        Home
      </Link>

      <Link className="nav-link text-white" to="/about">
        About Us
      </Link>
    </header>
  );
}
