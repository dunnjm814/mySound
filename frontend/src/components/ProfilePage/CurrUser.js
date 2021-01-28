import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Page.css'

function CurrentUser() {
  const sessionUser = useSelector((state) => state.session.user);
  const [profImgUp, setProfImgUp] = useState('')
  const [hidden, setHidden] = useState('hidden')
  let user = sessionUser
  let profPic;
  if (user.profilePic === null) {
    profPic = "img/anon.jpeg";
  } else {
    profPic = user.profilePic;
  }
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setProfImgUp(file);
  };
  return (
    <div id="page-wrap">

      <div id="header-wrap">
        <div id="header-container">
          <div>
            <img id="prof-pic"
              onMouseEnter={() => { setHidden('') }}
              onMouseLeave={() => { setHidden('hidden') }}
              src={`/${profPic}`} />
            <input id='upload' className={hidden} type='file' value={profImgUp} onChange={updateFile}></input>
          </div>
          <h1>{user.username}</h1>
        </div>
      </div>
      <div id='body'>
        <div id='artist-info'>

        </div>
        <div id='artist-tracks'>

        </div>

      </div>
    </div>
  );
}
export default CurrentUser
