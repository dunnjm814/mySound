import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as apiRouting from "../../store/apiUtils";

function UploadSongForm({track}) {
  const uploadDate = new Date()
  const [song, setSong] = useState(null)
  const [title, setTitle] = useState(`Untitled ${uploadDate.now}`)
  const [art, setArt] = useState('')
  const [description, setDescription] = useState('How does this sound?')
  const [radio, setPublic] = useState('public')
  const onSubmit = (e) => {
    e.preventDefault()
    const newTrack = {
      title,
      song,
      art,
      description,
      radio
    }
    console.log(newTrack)
    formReset()
  }
  const formReset = () => {
    setSong(null)
    setTitle(`Untitled ${uploadDate.now}`);
    setArt('')
    setDescription("How does this sound?");
    setPublic('public')
  }
  if (track) {
    setSong(track)
  }
  const updateArt = (e) => {
    const art = e.target.files[0];
    if (art) setArt(art);
  };
  return (
    <form className="pure-form pure-form-stacked" onSubmit={onSubmit}>
      <input
        placeholder="Track Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" style={{ overflow: "hidden" }} onChange={updateArt} />
      <input
        type="text"
        placeholder={description}
        value={description}
        style={{ overflowY: "scroll" }}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <input
          type="radio"
          id='public'
          value="public"
          onChange={(e) => {
            setPublic(e.target.value);
          }}
          checked={radio === "public"}
        /> Public
        <input
          type="radio"
          id="private"
          value="private"
          onChange={(e) => {
            setPublic(e.target.value);
          }}
          checked={radio === "private"}
        /> Private
      </div>
      <button type='submit'>Upload Track</button>
    </form>
  );
}
export default UploadSongForm
