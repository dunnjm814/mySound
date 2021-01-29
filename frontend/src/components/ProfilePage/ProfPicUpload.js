import React, { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { putProfPicAWS } from '../../store/apiUtils'
import {useDispatch, useSelector} from 'react-redux'

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

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
    console.log('form data', formData)
    await dispatch(putProfPicAWS(formData))
  }
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    acceptedFiles,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard:true
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const files = acceptedFiles.map((file) => (

      `${file.path} - ${file.size} bytes`

  ));

  // console.log(typeof files)
  return (
    <div className="container">
      <div>
        {/* <div {...getRootProps({ style })}> */}
        {/* <input type='file' {...getInputProps()} /> */}
        {/* <button type="button" onClick={open}>
          Upload Pic
        </button> */}
        <form {...getRootProps({ style })} onSubmit={handleSubmit}>
          <input
            type="file"
            style={{ maxWidth: "1em" }}
            onChange={handleUpload}
          ></input>
          {/* <button onClick={open}>upload Pic</button> */}
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}


export default ProfilePicUpload
