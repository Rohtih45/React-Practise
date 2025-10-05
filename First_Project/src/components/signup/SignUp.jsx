import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <div className="signup-form">
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <form>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="text"
              className="form-control"
              id="FullName"
              aria-describedby="emailHelp"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="text"
              className="form-control"
              id="City"
              aria-describedby="emailHelp"
              placeholder="City"
            />
          </div>
          <select class="form-select" aria-label="Default select example" style={{ marginTop: "20px" }}>
            <option selected>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="text"
              className="form-control"
              id="PhoneNumber"
              aria-describedby="emailHelp"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <input
              type="passowrd"
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>

          <br />

          <button type="submit" className="btn btn-primary sign-btn">
            Register
          </button>

          <p className="signuppage">
            I Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Sign In
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
