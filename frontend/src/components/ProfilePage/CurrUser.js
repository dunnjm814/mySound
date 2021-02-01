import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import BannerUp from "./BannerUp";
import './Page.css'
import ProfilePicUpload from "./ProfPicUpload";

function CurrentUser() {
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
  const profilePic = useSelector((state) => state.apiUtils.updatedProfPic ? state.apiUtils.updatedProfPic.profilePic : '')
  const banner = useSelector((state) => state.apiUtils.updatedBanPic ? state.apiUtils.updatedBanPic.bannerPic : '')
  const [hidden, setHidden] = useState('')

  let pic
  useEffect(() => {
    dispatch(sessionActions.restore())
    pic = profilePic || sessionUser.profilePic
    if (!pic) {
      pic = "/img/anon.jpeg";
    }
  }, [dispatch, profilePic])
  let banPic;
  useEffect(() => {
    dispatch(sessionActions.restore())
    banPic = banner || sessionUser.bannerPic
    if (!banPic) {
      banPic = ''
    }
  }, [dispatch, banner])
  return (
    <div id="page-wrap">
      <div
        id="header-wrap"
        style={{
          backgroundImage: `url(${sessionUser.bannerPic})`,
          backgroundPosition: 'center',
          backgroundSize: "cover"
        }}
      >
        <div id="header-container">
          <div id="prof-pic-wrap">
            <img id="prof-pic" src={`${sessionUser.profilePic}`} />
            <div id="prof-pic-drag" className={hidden}>
              <ProfilePicUpload userId={sessionUser.id} />
            </div>
          </div>
          <h1>{sessionUser.username}</h1>
        </div>
        <div>
          <BannerUp userId={sessionUser.id}/>
        </div>
      </div>
      <div id="page-body">
        <div id="artist-info">
          <div id="info-wrap">
            <h4> about me: </h4>
            <br />
            <p id="description">hello thank you for visiting</p>
          </div>
        </div>
        <div id="artist-tracks-wrap">
          <div id="artist-tracks">
            <img id="construction1" src="/img/underconstruction2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurrentUser
