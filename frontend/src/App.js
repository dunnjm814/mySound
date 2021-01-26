import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import Upload from "./components/Upload/Upload";
import Splash from "./components/Splash";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div >
      <Navigation isLoaded={isLoaded} />
      <Splash />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>

          </Route>
        <Route path='/user/:username'>
            <ProfilePage isLoaded={isLoaded}/>
          </Route>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/'>
            <h1>404 boiiii</h1>
          </Route>
      </Switch>
      )}
      </div>
  );
}

export default App;
