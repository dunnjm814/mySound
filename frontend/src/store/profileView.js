import { fetch } from "./csrf";

const GET_PROFILE = "profileView/getProfile";

const getProfile = (username) => {
  console.log('inside action creator', username)
  return {
    type: GET_PROFILE,
    payload: username,
  };
};

export const getArtistProfile = (username) => async (dispatch) => {
  console.log('inside thunk', username)
  const res = await fetch(`/api/username/${username}`);
  console.log('inside thunk',res)
  dispatch(getProfile(res.data.profile));
  return res;
};

const initialState = {};

export default function profileReducer(state = initialState, action) {

  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    default:
      return state
  }
}
