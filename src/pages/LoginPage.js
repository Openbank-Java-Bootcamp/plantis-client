import React from 'react'
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import video from '../images/video.mp4'

const API_URL = "http://localhost:5005";



 function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
  
    const navigate = useNavigate();
  
    const { storeToken, authenticateUser } = useContext(AuthContext);
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
      const requestBody = { email, password };
      axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/generalplants"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (

    <div>
      
    
      <form onSubmit={handleLoginSubmit} className="register">
      <h1>Enter your details:</h1><br></br>
      <div className="section">
        <label>Email:
        <input type="email" name="email" value={email} onChange={handleEmail} />
</label>
</div>
<div className="section">
        <label>Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </label>
</div>
        <button type="submit">Login</button>
     <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
</div>
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    
      </form>
      <video autoPlay loop id="video_background" preload="auto" muted >
   <source src={video} type="video/mp4" />
 </video>
    
    </div>
  )
}
export default LoginPage;