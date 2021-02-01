import Upload from "../components/Upload/Upload";
import { fetch } from "./csrf";

const UPDATE_PROF_PIC = "profileView/updateProfPic";
const UPDATE_BANNER_PIC = "profileView/updateBannerPic"

const updateProfPic = (updatedProfPic) => {
  return {
    type: UPDATE_PROF_PIC,
    payload: updatedProfPic,
  };
};
const updateBanPic = (updatedBanPic) => {
  return {
    type: UPDATE_BANNER_PIC,
    payload: updatedBanPic
  }
}

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
    
    dispatch(updateProfPic(res.data.newProfPic));
    return res.data.newProfPic
  } catch (e) {
    console.error(e)
  }
};

export const putBanner = (formData) => async (dispatch) => {
  try {
    let res = await fetch("/api/aws/bannerPicUpload", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "PUT",
      body: formData,
    });
    if (!res.ok) throw res;

    dispatch(updateBanPic(res.data.newBanPic))
    return res.data.newBanPic
  } catch (e) {
    console.error(e)
  }
}

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
    case UPDATE_BANNER_PIC:
      newState = Object.assign({}, state)
      newState.updatedBannerPic = action.payload
      return newState
    default:
      return state
  }
}
export default apiReducer
