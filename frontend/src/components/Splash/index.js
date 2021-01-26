// import {useState} from 'react'
// import { GiphyFetch } from "@giphy/js-fetch-api";
// import {Gif} from '@giphy/react-components'
// import { useAsync } from "react-async-hook";
// const key = `${process.env.REACT_APP_GIPHY_API_KEY}`;
// // console.log(key);
// const gf = new GiphyFetch(key);


function Splash() {
  // const [gif, setGif] = useState(<IGif gif={gif} />)
  // const data = useAsync(async () => {
  //   const { data } = await gf.gif('LQv4IGmdZAF7TmMJEa')
  //   console.log('async',data)
  //   // setGif(data)
  //   return data
  // }, [])
  // console.log('return',data)

  return (
    <>
      <div id="splash-wrap">
        {/* <Gif gif={data}/> */}
        <img
          src="img/synchani.gif"
          alt="oscGIf"
          style={{
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            width: "100%",
            height: "100% ",
            padding: 0,
            margin: 'auto',
          }}
        />
        <h1 id="splash-title">SPLASH!</h1>
      </div>
    </>
  );
}
export default Splash
