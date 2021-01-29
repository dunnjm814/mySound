import {useState } from "react";
import { putProfPicAWS } from '../../store/apiUtils'
import {useDispatch,} from 'react-redux'



function ProfilePicUpload({userId}) {

  const [upload, setUpload] = useState(null)
  const dispatch = useDispatch()

  function handleUpload(e) {
    setUpload(e.target.files[0])
  }
  async function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append('file', upload)
    formData.append('userId', userId)
    
    await dispatch(putProfPicAWS(formData))
  }
  return (
    <div className="container">
      <div style={{position:'relative'}}>
        <form className='pure-form pure-form-stacked' style={{ position:'absolute'}} onSubmit={handleSubmit}>
          <input
            type="file"
            style={{ color: "purple", maxWidth: "" }}
            onChange={handleUpload}
          ></input>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}


export default ProfilePicUpload
