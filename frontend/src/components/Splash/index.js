import {useState, useEffect} from 'react'
import { GiphyFetch } from "@giphy/js-fetch-api";
import {Gif} from '@giphy/react-components'
import './Splash.css'
// import { useAsync } from "react-async-hook";



function Splash() {
  const key = `${process.env.REACT_APP_GIPHY_API_KEY}`;
  const gf = new GiphyFetch(key);
  const [gif, setGif] = useState(null)
  useEffect(() => {
    (async () => {

      const { data } = await gf.gif("LQv4IGmdZAF7TmMJEa");
      console.log("async", data);
      setGif(data)
      return data;
    })()
  },[])
  return (
    <>
      <div id="splash-wrap">
        {gif && (
          <Gif
            style={{
              objectFit: "center",
              width: "100%",
              height: "100% ",
              padding: 0,
              margin: "0 16% 0 16%",
              zIndex: "-5",
            }}
            gif={gif}
          />
        )}
        <div id="splash-title">
          <h2>Welcome to</h2>
          <h1>mySound</h1>
        </div>
        {/* <img
          src="img/synchani.gif"
          alt="oscGIf"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100% ",
            padding: 0,
            margin: 'auto',
            zIndex: '-5'
          }}
        /> */}
      </div>
      <div id="splash-deets" className="pure-g">
        <div className="pure-u-2-5">
          <p style={{ marginTop: "0%", paddingTop: "3px" }}>
            producer and songwriters community
          </p>
        </div>
        <div className="pure-u-3-5">
          <p style={{ marginBottom: "0%", paddingBottom: "3px" }}>
            refine your sound
          </p>
        </div>
      </div>
    </>
  );
}
export default Splash
