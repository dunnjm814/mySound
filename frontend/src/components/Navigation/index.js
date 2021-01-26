import {useState} from 'react'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";


function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const [active, setActive] = useState('')
  function toggle(e) {
    if (e.target.classList.contains('active')) {
      setActive('')
    }
  }
  return (
    <div id="nav-bar" className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list" style={{ listStyleType: "none" }}>
        <li className={`pure-menu-item ${active}`} onClick={(e) => toggle(e)}>
          <NavLink id="home" className="pure-menu-link" exact to="/">
            <img
              style={{ marginTop: "3px", height: "33px", width: "33px" }}
              src="img/mysound.png"
              alt="home"
            />
          </NavLink>
        </li>
        <li className="pure-menu-item pure-menu-selected pure-menu-has-children pure-menu-allow-hover">
          {sessionUser && <ProfileButton user={sessionUser} />}
        </li>
        <li className="pure-menu-item">
          {sessionUser && (
            <NavLink id="button" className="pure-menu-link" to="/upload">
              Upload
            </NavLink>
          )}
        </li>
        <li className="pure-menu-item">{!sessionUser && <LoginFormModal />}</li>
        <li className="pure-menu-item">
          {!sessionUser && <SignupFormModal />}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
