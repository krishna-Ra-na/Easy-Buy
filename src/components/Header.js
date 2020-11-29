import React, { useState } from "react";
import "./Header.css";
import { CgShoppingCart } from "react-icons/cg";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h">
                <h2>EasyBuy</h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link "> Our Shop</a>
                  </li>
                </ul>

                <ul className="nav-shop">
                  {/* <li className="nav-item">
                    <button>
                      <i className="ti-search"></i>
                    </button>
                  </li> */}
                  <li className="nav-item">
                    <button>
                      <CgShoppingCart />
                      <span className="nav-shop__circle">3</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="button button-login w-100"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                    {/* <a className="button button-header" href="#" onClick={handleLogout}>
                      Logout
                       <img src="img/product/review-1.png" alt="" /> 
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
