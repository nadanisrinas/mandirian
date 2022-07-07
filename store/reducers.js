import { combineReducers } from "redux";
import * as types from "./types";

//GET DATA
const dataReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        isLoading: true,
        isError: null,
      };
    case types.GET_DATA_SUCCESS:
      return {
        isLoading: false,
        data: payload.data.articles,
        meta: {
          totalResults: payload.data.totalResults,
        },
        isError: null,
      };
    case types.GET_DATA_FAILED:
      return {
        isLoading: false,
        isError: payload.message,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);
