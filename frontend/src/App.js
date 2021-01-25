import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restore()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Switch>
        <Route path='/user/:username'>
            <ProfilePage isLoaded={isLoaded}/>
        </Route>
      </Switch>
      )}
      </>
  );
}

export default App;
