import { fetch } from "./csrf";

const GET_PROFILE = "session/getProfile";

const getProfile = (username) => {
  return {
    type: GET_PROFILE,
    payload: username,
  };
};
export const getArtistProfile = (username) => async (dispatch) => {
  const res = await fetch(`/api/${username}`);
  dispatch(getProfile(res.profile));
  return res;
};

const initialState = { username: null };

export default function profileReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_PROFILE:
      newState = Object.assign({}, state)
      newState.username = action.payload;
      return newState
    default:
      return state
  }
}
