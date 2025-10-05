import React, { useContext, useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import localContext from "../container/localcontext";

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLogin, setLogin, setLogout] = useContext(localContext);
  console.log(isLogin);

  return (
    
    <div
    
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px 43px 40px"
      }}
    >
      
      <div>
        <div className="signin-form">
          <h2 style={{ textAlign: "center" }}>   Login</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                
              />
            </div>
            <div className="form-group " style={{marginTop:"20px"}}>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                
              />
            </div>
            <br />
            <button
              onClick={()=>{
                // props.setIslogin(true);
                setLogin();
              }}
              type="submit"
              className="btn btn-primary login-btn"
            >
              Login
            </button>

            <h5
              style={{ textAlign: "center", color: "grey", marginTop: "15px" }}
            >
              OR
            </h5>

            <h6 style={{ textAlign: "center", color: "blue" }}>
              Log in with Facebook
            </h6>

            <Link
              to={"/forget-password"}
              style={{ textDecoration: "none !important" }}
            >
              <p className="forget">Forget Password ?</p>
            </Link>
          </form>
        </div>
        <div className="signup">
          <p>
            Don't have an account? {" "}
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
