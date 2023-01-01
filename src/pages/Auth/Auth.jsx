import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>Twitter Clone</h1>
          <h6>Explore what's happening!</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <SignIn/>
    </div>
  );
};

function SignIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign In</h3>
        <div>
          <input
            name="username"
            type="text"
            placeholder="User Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="infoInput"
          />
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Don't have an account Sign Up</span>
            <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm ">
        <h3>Sign Up</h3>
        <div>
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            name="lastname"
            type="text"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="User Name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. LOGIN!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
