import React from 'react';
import logo from '../images/logo.png'
import video from '../images/video.mp4'

function HomePage() {
  return (
    <div className="main-container">
      <div className="main-page">
      <img alt="Logo" src={logo} className="main-logo" />
       {/*  <h1>Welcome to Plantis!</h1> */}
      </div>
      <div className="home-background">
      <div className='main-text'>
      <br/><p>Are you tired of killing your plants at home? <br/><br/>Then try Plantis! <br/><br/> An App where you can keep track of your houseplants!</p>
      </div>

      <div className="signup">
        <a href="/signup">SignUp</a>
      </div>
      <div className="login">
        <p className='main-text'>Already have an account?</p><br/>
        <a href="/login">Login</a>
      </div>
      </div>
      <video autoPlay loop id="video_background" preload="auto" muted >
   <source src={video} type="video/mp4" />
 </video>
    </div>
  );
}

export default HomePage;
