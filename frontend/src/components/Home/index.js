import { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
import './Home.css'

function Home() {
  const key = `${process.env.REACT_APP_GIPHY_API_KEY}`;
  const gf = new GiphyFetch(key);
  const [gif, setGif] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await gf.random({ tag: "under construction", type: "gifs" });

      setGif(data);
      return data;
    })();
  }, []);
  return (
    <div id="home-body">
      <div id="home-header-wrap">
        <h1 id="home-header">What is everybody working on today...?</h1>
      </div>
      <div id="home-main-content">
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
      </div>
      <h1>This page is under construction...</h1>
    </div>
  );
}
export default Home
