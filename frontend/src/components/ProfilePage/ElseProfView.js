import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Page.css'
import getArtistProfile from '../../store/profileView'

function ElseProfView() {
  const { username } = useParams()
  let dispatch = useDispatch()
  console.log(username)
  const profile = useSelector((state) => state.username)
  const [artist, setArtist] = useState(profile)
  console.log(username)

  useEffect(() => {
    let test = dispatch(getArtistProfile(username));
    setArtist(test)
    console.log(test)
  }, [username]);
  setArtist(artist)
  console.log(artist)
  let profPic;
  if (!artist.profilePic) {
    profPic = "/img/anon.jpeg";
  } else {
    profPic = artist.profilePic;
  }
  return (
    <div id="page-wrap">
      <div id="header-wrap">
        <div id="header-container">
          <div id="prof-pic-wrap">
            <img
              id="prof-pic"
              src={`${profPic}`}
            />
          </div>
          <h1>{artist.username}</h1>
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
