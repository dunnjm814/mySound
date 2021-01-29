import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
    // listener added only after showMenu is set to true
    document.addEventListener("click", closeMenu);
    // cleanup(remove) closeMenu listener.
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    <Redirect to="/" />;
  };
  let profPic
    if (!user.profilePic) {
      profPic = "/img/anon.jpeg"
    } else {
      profPic = user.profilePic;
    }

  return (
    <>
      <button
        id="button"
        className="profile-dropdown pure-menu-list pure-menu-link pure-button"
        onClick={openMenu}
        style={{maxHeight: '34.3px'}}
      >
        <img
          src={`${profPic}`}
          alt='profpic'
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            padding: "2px"
          }}
        />
        {user.username}
      </button>
      {showMenu && (
        <ul id="dropdown" className="profile-dropdown pure-menu-children">
          <li className="pure-menu-item">
            <NavLink
              id="profLink"
              key={user.username}
              to={`/user/${user.username}`}
            >
              Profile
            </NavLink>
          </li>
          <li className="pure-menu-item">{user.email}</li>
          <li>
            <button
              id="button"
              className="logout pure-menu-item pure-button"
              onClick={logout}
            >
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
