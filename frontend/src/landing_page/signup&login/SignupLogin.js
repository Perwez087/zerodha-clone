import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import "./SignupLogin.css"; 

function SignupLogin() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }
    try {
      const url = "https://zerodha-clone-pi.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href =
            "https://zerodha-clone-pi.vercel.app/auth/login";
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12">
          <img
            className="img-responsive"
            src="landingSignup.png"
            alt="Signup"
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="auth-container">
            <div className="img-logo">
              <img src="logo.png" className="logo-img" alt="Logo" />
            </div>
            <h4>Signup</h4>
            <form onSubmit={handleSignup}>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                autoFocus
                placeholder="Enter your name"
                value={signupInfo.name}
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={signupInfo.email}
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={signupInfo.password}
              />
              <button className="auth-btn" type="submit">
                Signup
              </button>
              <span style={{ margin: "14px 0" }}>
                Already have an account?{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to=""
                >
                  Login
                </Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center text-muted">
          <p className="info-text">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              this article
            </Link>{" "}
            to know more.
          </p>
          <p className="info-text">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              offline forms
            </Link>
            . For help,{" "}
            <Link style={{ textDecoration: "none" }} to="/">
              click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;
