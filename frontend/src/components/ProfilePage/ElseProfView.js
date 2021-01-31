import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Page.css'
import * as profileActions from '../../store/profileView'

function ElseProfView() {
  const { username } = useParams();
  console.log(username); // Demo-lition
  const [artist, setArtist] = useState();
  const profile = useSelector((state) => state.profile);
  let dispatch = useDispatch();
  console.log(profile);
  /* {id: 1,
    username: "Demo-lition",
    profilePic: "img/anon.jpeg",
    bannerPic: "",
    description: null} */

    console.log(profile.profilePic); // img/anon.jpeg
    console.log("()()()()()()", artist); // {profile:null}

    useEffect(() => {
      dispatch(profileActions.getArtistProfile(username));
      setArtist(profile);
    }, [dispatch, username]);
    console.log("()()()()()()", artist); // {profile:null}
    let profPic
    if (profile.profilePic) {
      profPic = profile.profilePic;
    } else {
      profPic = "/img/anon.jpeg";
    }

  return (
    <div id="page-wrap">
      <div id="header-wrap">
        <div id="header-container">
          <div id="prof-pic-wrap">
            {/* <img id="anon-pic" src={"/img/anon.jpeg"} alt=" anon profile img" /> */}
            <img id="prof-pic" src={`${profPic}`} alt="profile img" />
          </div>
          <h1>{profile.username}</h1>
        </div>
      </div>
      <div id="body">
        <div id="artist-info"></div>
        <div id="artist-tracks"></div>
      </div>
    </div>
  );
}
export default ElseProfView
