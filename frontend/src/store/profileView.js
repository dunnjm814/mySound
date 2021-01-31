import { fetch } from "./csrf";

const GET_PROFILE = "profileView/getProfile";

const getProfile = (username) => {
  console.log("@@@@@@@",username)
  return {
    type: GET_PROFILE,
    payload: username,
  };
};

export const getArtistProfile = (username) => async (dispatch) => {
  try {
    console.log("d~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`")
    const res = await fetch(`/api/username/${username}`);
    console.log("res", res)
    dispatch(getProfile(res.data.profile));
      console.log('&&&&&&&',res.data.profile)
    return res.data;
  } catch (e) {
    console.error(e)
  }

};

const initialState = {profile: null};

export default function profileReducer(state = initialState, action) {

  switch (action.type) {
    case GET_PROFILE:
      console.log("**********", action.payload)
      return action.payload;
    default:
      return state
  }
}
