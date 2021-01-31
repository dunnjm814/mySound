import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Page.css'
import * as profileActions from '../../store/profileView'

function ElseProfView() {
  const { username } = useParams();

  const [artist, setArtist] = useState();
  const profile = useSelector((state) => state.profile);
  let dispatch = useDispatch();

    useEffect(() => {
      dispatch(profileActions.getArtistProfile(username));
      setArtist(profile);
    }, [dispatch, username]);

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
            <img id="prof-pic" src={`${profPic}`} alt="profile img" />
          </div>
          <h1>{profile.username}</h1>
        </div>
      </div>
      <div id="page-body">
        <div id="artist-info">
          <div id='info-wrap'>
            <h4> about me: </h4><br />
            <p id='description'>
              hello thank you for visiting
            </p>

          </div>
        </div>
        <div id='artist-tracks-wrap'>
          <div id="artist-tracks">
            <img id='construction1' src='/img/underconstruction1.jpg'/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ElseProfView
