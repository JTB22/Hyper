import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to={`/login`}>Login</Link>
      <Link to={`/`}>Home</Link>
      <Link to={`/about`}>About</Link>
    </nav>
  );
}

export default Menu;
