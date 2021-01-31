import './Upload.css'
import {useEffect, useMemo, useState, useRef} from 'react'
import { useDropzone } from "react-dropzone";
import UploadModal from './UploadModal';
import ReactPlayer from "react-player";

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
  const [file, setFile] = useState([])
  console.log("####",file)

  const {

    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "audio/*",
    onDrop: (acceptedFiles) => {
      setFile(
        [...acceptedFiles]
        )
      }
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

      //
  const [track, setTrack] = useState(null)

  console.log('!!!!!!!!!!!',track)
  useEffect(() => {
    if (file.length) {
      let temp = file[0]
      let temp2 = temp.path
      console.log("$$$$",temp)
      setTrack(temp2)
    }
  },[file])
      return (
        <div className="container">
          {/* {track.length && <UploadModal track={track} />} */}
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop a track or audio clip</p>
          </div>
          {/* <ul>{track}</ul> */}
          <div id="upload-preview-container">
            {track && (
              <ReactPlayer url={track} width='400px' height='50px' playing={false} controls={true} />
            )}
          </div>
        </div>
      );
}

function Upload() {
    return (

        <div id="upload-main-wrap">
          <div id="upload-main">
            <h1>upload a track</h1>
            <div className="upload-container" style={{ position: "relative" }}>
              <StyledDropzone >
              </StyledDropzone>
            </div>
          </div>
        </div>

    );
}

export default Upload
