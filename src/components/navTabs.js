import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css"


function NavTabs() {
  return (


    <div className="container nav-container">
      <div className="row">
        <div className="col-12">

          <h1 className="name">Fanuel Alem</h1>

          <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item ">
              <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link " }>
                Home
        </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
        </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
              >
                Portfolio
        </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
        </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/learn"
                className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
              >
                Learn
        </Link>
            </li>
          </ul>
         </div>
      </div>
    </div>

   );
}

export default NavTabs;
