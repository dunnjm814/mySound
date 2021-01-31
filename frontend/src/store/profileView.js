import { fetch } from "./csrf";

const GET_PROFILE = "profileView/getProfile";

const getProfile = (username) => {

  return {
    type: GET_PROFILE,
    payload: username,
  };
};

export const getArtistProfile = (username) => async (dispatch) => {
  try {

    const res = await fetch(`/api/username/${username}`);

    dispatch(getProfile(res.data.profile));

    return res.data;
  } catch (e) {
    console.error(e)
  }

};

const initialState = {profile: null};

export default function profileReducer(state = initialState, action) {

  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    default:
      return state
  }
}
