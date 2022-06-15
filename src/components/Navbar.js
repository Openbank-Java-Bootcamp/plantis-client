import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div>
    <nav className="navbar">
    <div className="container-nav-links">
    <ul className="navbar-nav">
    <li className="nav-item">
          <a className="nav-link" href="/generalplants">Home</a>
        </li>
     

      {isLoggedIn && (
        <>
        <li className="nav-item">
          <a className="nav-link" href="/myplants">My Plants</a>
        </li>
          <li className="nav-item">
          <Link to="/">
          <a className="logout-link" onClick={logOutUser}>Logout</a>
          </Link>
        </li>
         
         
         
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