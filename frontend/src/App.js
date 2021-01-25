import LoginFormPage from "./components/LoginFormPage";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, Switch} from 'react-router-dom'
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

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
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
      )}
      </>
  );
}

export default App;
