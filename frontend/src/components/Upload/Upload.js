import './Upload.css'
import {useMemo} from 'react'
import {useDropzone} from "react-dropzone";
import request from "superagent";

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
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "audio/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const track = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))
  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a track or audio clip</p>
      </div>
      <ul>{track}</ul>
    </div>
  );
}

function Upload() {
    return (
      <>
        <div id="upload-main-wrap">
          <div id="upload-main">
            <h1>upload a track</h1>
            <div className="upload-container">
              <StyledDropzone />
            </div>
          </div>
          <div id='upload-preview-container'>
            <h1>Coming soon! <br /> Track preview!</h1>
            <form>
              
            </form>
          </div>
        </div>

      </>
    );
}

export default Upload
