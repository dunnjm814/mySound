// use POST /api/session on backend route to login a user
import { fetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

// Action creators
const setUser = (user) => {
  // sets session state to current user
  return {
    type: SET_USER,
    payload: user,
  };
};
const removeUser = () => {
  // removes current user from session state
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  // login thunk, sets user session from response
  const { credential, password } = user;
  // post /api/session expects req.body to have credential key and pass.
  const res = await fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  dispatch(setUser(res.data.user));
  return res;
};
export const restore = () => async (dispatch) => {
  const res = await fetch("/api/session");
  dispatch(setUser(res.data.user));
  return res;
};
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  dispatch(setUser(res.data.user));
  return res;
};
export const logout = () => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return res;
};
const initialState = { user: {} };

export default function sessionReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = {};
      return newState;
    default:
      return state;
  }
}
