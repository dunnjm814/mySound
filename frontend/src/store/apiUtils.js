import Upload from "../components/Upload/Upload";
import { fetch } from "./csrf";

const UPDATE_PROF_PIC = "profileView/updateProfPic";

const updateProfPic = (updatedProfPic) => {
  return {
    type: UPDATE_PROF_PIC,
    payload: updatedProfPic,
  };
};

export const putProfPicAWS = (formData) => async (dispatch) => {
  try {
    let res = await fetch("/api/aws/profPicUpload", {
      // csrf fetch has data key res.data = value of data
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });
    if (!res.ok) throw res;
    const data = await res.data
    
    dispatch(updateProfPic(res.data.newProfPic));
    return res.data.newProfPic
  } catch (e) {
    console.error(e)
  }
};

const initialState = {
  updatedProfPic: null,
  updatedBannerPic: null,
  uploadSong: null
};

const apiReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_PROF_PIC:
      newState = Object.assign({}, state)
      newState.updatedProfPic = action.payload
      return newState
    default:
      return state
  }
}
export default apiReducer
