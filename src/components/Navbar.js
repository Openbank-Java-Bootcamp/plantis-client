import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";

function Navbar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <div className="container-nav-links">
          <a className="nav-link" href="/generalplants">
            <img alt="logo" className="logo-nav" src={logo} />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="logout-link" onClick={logOutUser}>
                Logout
              </Link>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/myplants">
                    My Plants
                  </a>
                </li>
                <li className="nav-item">
                  <a className="home-link" href="/generalplants">
                    Home
                  </a>
                </li>
                {user.roleName === "ROLE_ADMIN" && (
                  <li className="nav-item">
                    <a className="admin-link" href="/addgeneralplants">
                      Add Plants
                    </a>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </nav>
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
    </div>
  );
}

export default Navbar;
