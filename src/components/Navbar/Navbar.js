import logo from "../../images/logo.png";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, link } from "react-router-dom";
import {BsWhatsapp} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
function Navbar({ loggedIn }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle === true) {
      document.getElementById("mySidenav").style.width = "100%";
    } else {
      document.getElementById("mySidenav").style.width = "0px";
    }
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  let data;
  if (loggedIn) {
    data = (
      <>
        <p>Welcome</p>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </>
    );
  } else {
    data = (
      <>
        {
          <>
            <div className="dropdown ps-0">
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Help
                </a>
              </li>
              <div
                className="dropdown-content"
                style={{ margin: "0 0 0 -5rem", zIndex: "50" }}
              >
                <a href="https://wa.me/+2348104941162" target={"_blank"}>
                  <li><BsWhatsapp/>WhatsApp</li>
                </a>

                <a href="tel: +234 810 795 1217">
                  <li><BsFillTelephoneFill/>08056439280 </li>
                </a>
                <a href="mailto: fabslogistics@gmail.com">
                  <li><HiOutlineMail/>fabslogistics@gmail.com</li>
                </a>
              </div>
            </div>
          </>
        }
      </>
    );
  }
  return (
    <div>
      <div className="parent nav-parent">
        <nav>
          {/* <div className="nav-parent"> */}
          <div className="logo-wrap">
            <Link to="/" className="d-flex">
              <img src={logo} alt="" />
               <h3 className="ms-3">FABS Logistics</h3>
            </Link>
          </div>

          <div>
            <ul className="menubar">
              <li>
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                <Link to="/sign-in">Login</Link>{" "}
              </li>
              <li>
                <Link to="/sign-up">Sign up</Link>{" "}
              </li>
              {/* <li>
                <a href="">Help</a>
              </li> */}
              {data}
            </ul>

            <i onClick={handleToggle} class="fa-solid fa-bars menubaricon"></i>
          </div>

          {/* </div> */}
        </nav>
      </div>

      <div id="mySidenav" class="sidenav">
        <a
          onClick={handleToggle}
          href="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
        >
          &times;
        </a>
        <Link to="/">Home</Link>{" "}
        <Link to="/sign-in">Login</Link>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
export default Navbar;
