import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import video from '../images/video.mp4'

const API_URL = "http://localhost:5005";


 function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
  
    const navigate = useNavigate();
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
  
    const handleSignupSubmit = (e) => {
      e.preventDefault();
    
      const requestBody = { email, password, name };

      axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/generalplants");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignupSubmit} className="register">
      <h1>Sign up here!</h1><br/>
      <div className="section">
        <label>E-mail*:
        <input type="email" name="email" value={email} onChange={handleEmail} />
        </label>
      </div>
      <div className="section">
        <label>Password*:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </label>
        </div>
        <div className="section">
        <label>Name*:
        <input type="text" name="name" value={name} onChange={handleName} />
        </label>
      </div>
        <button type="submit">Sign Up</button>
      
      <div class="error-message">
      {errorMessage && <p className="err-message">{errorMessage}</p>}
      </div>
      <p>Already have an account?</p>
      <Link to={"/login"}> Login</Link>
      </form>

      <video autoPlay loop id="video_background" preload="auto" muted >
   <source src={video} type="video/mp4" />
 </video>

    </div>
  );
}
export default SignupPage;