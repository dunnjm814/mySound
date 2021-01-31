import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {Route, Switch} from 'react-router-dom'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import Upload from "./components/Upload/Upload";
import Splash from "./components/Splash";
import FooterNav from "./components/FooterNav";
import Home from "./components/Home";


function App({style}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
  <>
    <div style={style}>
      <Navigation isLoaded={isLoaded} />
      {!sessionUser && <Splash exact path='/'/>}
      {isLoaded && (
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/user/:username">
            <ProfilePage sessionUser={sessionUser} />
          </Route>
          <Route path="/upload">
            <div>
              <Upload />
            </div>
          </Route>
          </Switch>
      )}
      </div>
      <footer>

    <FooterNav /> 
      </footer>
  </>
  );
}

export default App
