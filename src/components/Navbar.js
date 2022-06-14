import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/generalplants">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/myplants">
            <button>My plants</button>
          </Link>
          <Link to="/logout">
          <button onClick={logOutUser}>Logout</button>
          </Link>
          <span>Hello! {user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;