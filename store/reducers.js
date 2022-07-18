/* eslint-disable */
import * as types from "./types";
export const initialStateDataReducers = {
  isLoading: false,
  data: [],
  meta: {
    totalResults: 0
  },
  isError: false, 
  page: 1,
  pageSize: 5
}
//GET DATA
const dataReducer = (state = initialStateDataReducers, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: null,
        page: payload?.data?.pages ?? 1,
        pageSize: payload?.data?.pageSize ?? 5
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data.articles,
        meta: {
          totalResults: payload.data.totalResults,
        },
        isError: null,
      };
    case types.GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: payload.message,
      };
    default:
      return state;
  }
};

export default dataReducer;
