import {
    REGISTER_ERROR,
    REGISTER_USER,
    LOGIN_USER,
    LOGIN_ERROR,
    LOAD_USER,
    LOAD_USER_ERROR,
    LOADING,
  } from "./types";
  
  import { api } from "../utils/api";
  
  
  export const loadUser = () => async (dispatch) => {
    try {
      const response = await api.get(`/v1/auth/me`);
  
      dispatch({
        type: LOAD_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_USER_ERROR,
        payload: error.response,
      });
    }
  };
  
  // export const googleLogin = (body) => async (dispatch) => {
  //   try {
  //     const response = await api.post(`/api/v1/auth/google`, body);
  //     dispatch({
  //       type: GOOGLE_LOGIN,
  //       payload: response.data,
  //     });
  //     dispatch(loadUser());
  //   } catch (error) {
  //     dispatch({
  //       type: GOOGLE_LOGIN_ERROR,
  //       payload: error.response,
  //     });
  //   }
  // };
  
  export const loginUser = (body) => async (dispatch) => {
    try {
      dispatch({
        type: LOADING,
      });
      const response = await api.post(`/user/login`, body);
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
      dispatch(loadUser());
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  export const registerUser = (body) => async (dispatch) => {
    try {
      dispatch({
        type: LOADING,
      });
      const response = await api.post(`/user`, body);
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      });
    }
  };
  
  // export const editUser = (body) => async (dispatch) => {
  //   try {
  //     dispatch({
  //       type: LOADING,
  //     });
  //     const response = await api.post(`/api/v1/auth/edit`, body);
  //     dispatch({
  //       type: EDIT_USER_DETAILS,
  //       payload: response.data.data,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: EDIT_USER_DETAILS_ERROR,
  //       payload: error.response.data,
  //     });
  //   }
  // };
  
  