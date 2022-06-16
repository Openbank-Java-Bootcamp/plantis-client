import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading
  if (isLoading) return <p>Loading ...</p>;
  if (!isLoggedIn){return <Navigate to="/login" />;}
  if (isLoggedIn  && user.roleName === "ROLE_USER") {
    // If the admin is logged in, navigate to home page
    return <Navigate to="/generalplants" />;
  } else {
    // If the admin is not logged in, allow to see the page
    return children;
  }
}

export default IsAdmin;