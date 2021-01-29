import './Upload.css'
import {useMemo, useState} from 'react'
import { useDropzone } from "react-dropzone";
import UploadModal from './UploadModal';



const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
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


function StyledDropzone(props) {
  const [track, setTrack] = useState([])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "audio/*",
    onDrop: (acceptedFiles) => {
      setTrack(
        [...acceptedFiles]
      )
    }
  });
  console.log(track)
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  //

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a track or audio clip</p>
      </div>
      {/* <ul>{track}</ul> */}
    </div>
  );
}

function Upload() {
    return (
      <>
        <div id="upload-main-wrap">
          <div id="upload-main">
            <h1>upload a track</h1>
            <div className="upload-container" style={{ position: "relative" }}>
              <StyledDropzone >
                <UploadModal  />
              </StyledDropzone>
            </div>
            <div id="upload-preview-container" style={{ position: "absolute" }}>
              <h1>
                Coming soon! <br /> Track preview!
              </h1>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Upload
