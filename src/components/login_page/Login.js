import React, { useState } from "react";
import "./login.css";
import { useSpring, animated } from "react-spring";
import Logo from '../Img/react.png';
import Google from '../Img/google-logo.png'
import Facebook from '../Img/facebook.png'
import Twitter from '../Img/twitter.png'

function App() {
          const[signupFormStatus, setSignupFormStatus] = useState(false);

          const loginProps = useSpring({ 
            left: signupFormStatus ? -500 : 0, // Login form sliding positions
          });

          const signupProps = useSpring({
            left: signupFormStatus ? 0 : 500, // Signup form sliding positions 
          });
        
          const loginBtnProps = useSpring({
            borderBottom: signupFormStatus 
              ? "solid 0px transparent"
              : "solid 2px #fa096d",  //Animate bottom border of login button
          });

          const signupBtnProps = useSpring({
            borderBottom: signupFormStatus
              ? "solid 2px #fa096d"
              : "solid 0px transparent", //Animate bottom border of signup button
          });
        
          function signupClicked() {
            setSignupFormStatus(true);
          }
          function loginClicked() {
            setSignupFormStatus(false);
          }

  return (
    <div className="login-signup-wrapper">
      <img src={Logo} alt="" className="img" />
      <h1 id="text">React</h1>
      <p id="para" >A javascript library for building user interfaces.</p>
      <p id="lama">Let's get deep into to learn React,</p>
      <p id="lama">Start from Now.</p>
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
          className="pink"
        >
          Login
        </animated.button>

        <animated.button
          onClick={signupClicked}
          id="signupBtn"
          style={signupBtnProps}
          className="pink"
        >
          Signup
        </animated.button>
      </div>

      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>

        <animated.form action="" id="signupform" style={signupProps}>
          <SignupForm />
        </animated.form>

      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a herf="#"></a>
      </animated.div>
     
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      
      <input type="text" id="username" placeholder="Email Address" />
      <input type="text" id="password" placeholder="Password" />
      <input type="submit" value="Login" className="submit" />

        <a herf="#" className="forgot-panel">Forgot password?</a>
      
      <p id="option">or login with</p>

      <div className="social-container">
          <a href=""><img src={Google} alt="google-logo.png" className="socail"/></a>
          <a href=""><img src={Facebook} alt="facebook.png"  className="socail"/></a>
          <a href=""><img src={Twitter} alt="twitter.png"    className="socail"/></a>
      </div>
         <p id="demo">Don't have an account? <span style={{color:"#fd088f"}}> Create new now!</span></p>
         <p id="sign">By signing up, you are agree with our <u style={{color:"#fd088f"}}> Terms & Conditions</u></p>
    </React.Fragment>
  );
}

function SignupForm() {
  return (
    <React.Fragment>
    <div className="reg">
      
      <input type="text" id="fullname" placeholder="Enter your fullname" />
      <input type="text" id="email" placeholder="Enter your email" />
      <input type="text" id="password" placeholder="Enter password" />
      <input type="text" id="confirmpassword" placeholder="Confirm password" />
      <input type="submit" value="signup" class="submit" />
    </div>
    </React.Fragment>
  );
}

export default App;