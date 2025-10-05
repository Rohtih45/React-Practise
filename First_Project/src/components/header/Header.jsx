import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import localContext from "../container/localcontext";

function Header() {
  const [isLogin, setLogin, setLogout] = useContext(localContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">
          Dude's Mart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                ContactUs
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center ">
            <Link to="/cart-details">
              <button className="btn btn-dark">
                <i className="fas fa-shopping-bag"></i> Cart
              </button>
            </Link>
            <Link to="/">
              <button
                onClick={() => {
                  // props.setIslogin(false);
                  setLogout();
                }}
                className="btn btn-danger"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
