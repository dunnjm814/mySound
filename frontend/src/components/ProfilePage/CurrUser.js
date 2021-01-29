import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Page.css'
import ProfilePicUpload from "./ProfPicUpload";

function CurrentUser() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const profilePic = useSelector((state) => state.apiUtils.updatedProfPic ? state.apiUtils.updatedProfPic.profilePic : '')
  // const [profImgUp, setProfImgUp] = useState('')
  const [hidden, setHidden] = useState('')
  const [avatar, setPic] = useState(profilePic ? profilePic : sessionUser.profilePic)
  let user = sessionUser
  console.log(avatar)
  let pic = avatar|| sessionUser.profilePic;
  useEffect(() => {
    dispatch(sessionActions.restore())
    pic = profilePic || sessionUser.profilePic
    if (!pic) {
      pic = "/img/anon.jpeg";
    }
  }, [profilePic])
  // function handleUpload(e) {
  //   setUpload(e.target.files[0])
  // }
  return (
    <div id="page-wrap">
      <div id="header-wrap"
        // style={{ backgroundImage: banner  }}
      >
        <div id="header-container">
          <div id="prof-pic-wrap">
            <img
              id="prof-pic"
              
              src={`${sessionUser.profilePic}`}
            />
            {/* <input id='upload' className={hidden} type='file' value={profImgUp} onChange={updateFile}></input> */}
            <div id="prof-pic-drag" className={hidden}>
              <ProfilePicUpload userId={sessionUser.id} />
            </div>
          </div>
          <h1>{user.username}</h1>
        </div>
            {/* <form id="banner-input"
              // onSubmit={handleSubmit}
            >
              <input type='file' style={{}}
                // onChange={handleUpload}
              >

              </input>
            </form> */}
      </div>
      <div id="body">
        <div id="artist-info"></div>
        <div id="artist-tracks"></div>
      </div>
    </div>
  );
}
export default CurrentUser
