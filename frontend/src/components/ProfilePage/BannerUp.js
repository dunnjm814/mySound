import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { putBanner } from '../../store/apiUtils'

function BannerUp({ userId }) {
  const [upload, setUpload] = useState(null);
  const dispatch = useDispatch()
  function handleUpload(e) {
    setUpload(e.target.files[0])
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", upload);
    formData.append("userId", userId);

    await dispatch(putBanner(formData));
  }
  return (
    <div id="form-wrap" style={{ display: "flex", justifyContent: "flex-end", opacity:'.5'}}>
      <form
        id="banner-input"
        className="pure-form pure-form-stacked"
        style={{ color: "purple", maxWidth: "" }}
        onSubmit={handleSubmit}
      >
        <input type="file" style={{}} onChange={handleUpload}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default BannerUp
