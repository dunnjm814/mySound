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
            <img src="../../public/img/mysound.png" alt="home" />
          </NavLink>
          {/* <li className="pure-menu-link">{isLoaded && sessionLinks}</li> */}
          <li className="pure-menu-item pure-menu-selected pure-menu-has-children pure-menu-allow-hover">
            {sessionUser && <ProfileButton user={sessionUser} />}
          </li>
          <li className="pure-menu-item pure-menu-selected">
            {!sessionUser && (
              <>
                <div>
                  <LoginFormModal className="pure-menu-item pure-menu-link" />
                </div>
                <div>
                  <SignupFormModal className="pure-menu-item pure-menu-link" />
                </div>
              </>
            )}
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Navigation
