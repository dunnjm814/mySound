import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function Navigation({isLoaded}) {
const sessionUser = useSelector((state) => state.session.user);

// let sessionLinks;
// if (sessionUser) {
//   sessionLinks = <ProfileButton user={sessionUser} />;
// } else {
//   sessionLinks = (
//     <>
//       <LoginFormModal />
//       <SignupFormModal />
//     </>
//   );
// }

  return (
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list" style={{ listStyleType: "none" }}>
        <li className="pure-menu-item pure-menu-selected">
          <NavLink className="pure-menu-link" exact to="/">
            Home
          </NavLink>
          {/* <li className="pure-menu-link">{isLoaded && sessionLinks}</li> */}
          <li className="pure-menu-item pure-menu-selected pure-menu-has-children pure-menu-allow-hover">
            {sessionUser && <ProfileButton user={sessionUser} />}
          </li>
          <li className="pure-menu-item pure-menu-selected">
            {!sessionUser && (
              <>
                <LoginFormModal className="pure-menu-link" />
                <SignupFormModal className="pure-menu-link" />
              </>
            )}
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Navigation
