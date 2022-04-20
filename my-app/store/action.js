import * as types from "./types";

const API_HOST = "https://newsapi.org/v2/everything";

//GET DATA
export const getData = (axios, params) => async (dispatch, getState) => {
  dispatch(dataRequest());
  try {
    let response = await axios({
      url: `${API_HOST}`,
      method: "GET",
      params: params,
    });
    dispatch(dataSuccess(response));
  } catch (error) {
    dispatch(dataError(error));
  }
};

export const dataRequest = () => ({ type: types.GET_DATA_REQUEST });
export const dataSuccess = (payload) => ({
  type: types.GET_DATA_SUCCESS,
  payload,
});
export const dataError = (payload) => ({
  type: types.GET_DATA_FAILED,
  payload,
});
